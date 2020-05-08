---
layout: post
title: CentOS6 分离 sshd、sftpd 服务
tags: Linux ssh sftp
categories: Linux
---

### 测试环境

```ini
OpenSSH_5.3p1, OpenSSL 1.0.1e-fips 11 Feb 2013
```

<!-- more -->

* TOC
{:toc}

### 复制相关文件

```bash
cp /etc/rc.d/init.d/sshd /etc/rc.d/init.d/sftpd
cp /etc/pam.d/sshd  /etc/pam.d/sftpd
cp /etc/ssh/sshd_config  /etc/ssh/sftpd_config
ln -sf  /usr/sbin/sshd  /usr/sbin/sftpd
cp /etc/sysconfig/sshd  /etc/sysconfig/sftp
cp /var/run/sshd.pid  /var/run/sftpd.pid && echo > /var/run/sftpd.pid
```

### 修改 sftpd_config 文件

```bash
vi /etc/ssh/sftpd_config
```

```ini
# /etc/ssh/sftpd_config 
Port 20022                                           # 需要修改 用于 sftp 服务端口
PermitRootLogin no                                   # 需要修改 禁止 root 用户登陆
PidFile /var/run/sftpd.pid                           # 需要修改 指定 pid 文件
# Subsystem  sftp  /usr/libexec/openssh/sftp-server  # 需要注释此行
Subsystem sftp internal-sftp                         # 需要添加
Match User sftpuser                                  # 需要添加 sftp 登陆用户
X11Forwarding no                                     # 需要添加
AllowTcpForwarding no                                # 需要添加
ForceCommand internal-sftp                           # 需要添加
```

### 添加 sftpuser 用户

```bash
useradd sftpuser                             # 添加用户
passwd  sftpuser                             # 设置密码
usermod  -s  /bin/false sftpuser             # 禁止登陆
```

### 禁用 SELinux

```bash
setenforce 0
sed -i "s/^SELINUX\=enforcing/SELINUX\=disabled/g" /etc/selinux/config
# SELinux 放行端口
# semanage port -a -t ssh_port_t -p tcp 20022
```

### 防火墙放行 sftpd 端口

```bash
iptables -A INPUT -p tcp --dport 20022 -j ACCEPT
iptables -A OUTPUT -p tcp --sport 20022 -j ACCEPT
```

### 修改 sftpd 服务启动脚本

```bash
vi /etc/rc.d/init.d/sftpd
```

```bash
#!/bin/bash
# 将sshd的相关命令文件换位sftpd
# 修改 start 函数 启动sftpd的配置文件为 /etc/ssh/sftpd_config
# source function library
. /etc/rc.d/init.d/functions

# pull in sysconfig settings
[ -f /etc/sysconfig/sftpd ] && . /etc/sysconfig/sftpd

RETVAL=0
prog="sftpd"
lockfile=/var/lock/subsys/$prog

# Some functions to make the below more readable
KEYGEN=/usr/bin/ssh-keygen
SSHD=/usr/sbin/sftpd
RSA1_KEY=/etc/ssh/ssh_host_key
RSA_KEY=/etc/ssh/ssh_host_rsa_key
DSA_KEY=/etc/ssh/ssh_host_dsa_key
PID_FILE=/var/run/sftpd.pid

runlevel=$(set -- $(runlevel); eval "echo \$$#" )

fips_enabled() {
        if [ -r /proc/sys/crypto/fips_enabled ]; then
                cat /proc/sys/crypto/fips_enabled
        else
                echo 0
        fi
}

do_rsa1_keygen() {
        if [ ! -s $RSA1_KEY -a `fips_enabled` -eq 0 ]; then
                echo -n $"Generating SSH1 RSA host key: "
                rm -f $RSA1_KEY
                if test ! -f $RSA1_KEY && $KEYGEN -q -t rsa1 -f $RSA1_KEY -C '' -N '' >&/dev/null; then
                        chmod 600 $RSA1_KEY
                        chmod 644 $RSA1_KEY.pub
                        if [ -x /sbin/restorecon ]; then
                            /sbin/restorecon $RSA1_KEY.pub
                        fi
                        success $"RSA1 key generation"
                        echo
                else
                        failure $"RSA1 key generation"
                        echo
                        exit 1
                fi
        fi
}

do_rsa_keygen() {
        if [ ! -s $RSA_KEY ]; then
                echo -n $"Generating SSH2 RSA host key: "
                rm -f $RSA_KEY
                if test ! -f $RSA_KEY && $KEYGEN -q -t rsa -f $RSA_KEY -C '' -N '' >&/dev/null; then
                        chmod 600 $RSA_KEY
                        chmod 644 $RSA_KEY.pub
                        if [ -x /sbin/restorecon ]; then
                            /sbin/restorecon $RSA_KEY.pub
                        fi
                        success $"RSA key generation"
                        echo
                else
                        failure $"RSA key generation"
                        echo
                        exit 1
                fi
        fi
}

do_dsa_keygen() {
        if [ ! -s $DSA_KEY -a `fips_enabled` -eq 0 ]; then
                echo -n $"Generating SSH2 DSA host key: "
                rm -f $DSA_KEY
                if test ! -f $DSA_KEY && $KEYGEN -q -t dsa -f $DSA_KEY -C '' -N '' >&/dev/null; then
                        chmod 600 $DSA_KEY
                        chmod 644 $DSA_KEY.pub
                        if [ -x /sbin/restorecon ]; then
                            /sbin/restorecon $DSA_KEY.pub
                        fi
                        success $"DSA key generation"
                        echo
                else
                        failure $"DSA key generation"
                        echo
                        exit 1
                fi
        fi
}

do_restart_sanity_check()
{
        $SSHD -t
        RETVAL=$?
        if [ $RETVAL -ne  0 ]; then
                failure $"Configuration file or keys are invalid"
                echo
        fi
}

start()
{
        [ -x $SSHD ] || exit 5
        [ -f /etc/ssh/sftpd_config ] || exit 6
        # Create keys if necessary
        if [ "x${AUTOCREATE_SERVER_KEYS}" != xNO ]; then
                do_rsa_keygen
                if [ "x${AUTOCREATE_SERVER_KEYS}" != xRSAONLY ]; then
                        do_rsa1_keygen
                        do_dsa_keygen
                fi
        fi

        echo -n $"Starting $prog: "
        $SSHD -f /etc/ssh/sftpd_config  && success || failure
        RETVAL=$?
        [ $RETVAL -eq 0 ] && touch $lockfile
        echo
        return $RETVAL
}

stop()
{
        echo -n $"Stopping $prog: "
        killproc -p $PID_FILE $SSHD
        RETVAL=$?
        # if we are in halt or reboot runlevel kill all running sessions
        # so the TCP connections are closed cleanly
        if [ "x$runlevel" = x0 -o "x$runlevel" = x6 ] ; then
            trap '' TERM
            killall $prog 2>/dev/null
            trap TERM
        fi
        [ $RETVAL -eq 0 ] && rm -f $lockfile
        echo
}

reload()
{
        echo -n $"Reloading $prog: "
        killproc -p $PID_FILE $SSHD -HUP
        RETVAL=$?
        echo
}

restart() {
        stop
        start
}

force_reload() {
        restart
}

rh_status() {
        status -p $PID_FILE openssh-daemon
}

rh_status_q() {
        rh_status >/dev/null 2>&1
}

case "$1" in
        start)
                rh_status_q && exit 0
                start
                ;;
        stop)
                if ! rh_status_q; then
                        rm -f $lockfile
                        exit 0
                fi
                stop
                ;;
        restart)
                restart
                ;;
        reload)
                rh_status_q || exit 7
                reload
                ;;
        force-reload)
                force_reload
                ;;
        condrestart|try-restart)
                rh_status_q || exit 0
                if [ -f $lockfile ] ; then
                        do_restart_sanity_check
                        if [ $RETVAL -eq 0 ] ; then
                                stop
                                # avoid race
                                sleep 3
                                start
                        else
                                RETVAL=6
                        fi
                fi
                ;;
        status)
                rh_status
                RETVAL=$?
                if [ $RETVAL -eq 3 -a -f $lockfile ] ; then
                        RETVAL=2
                fi
                ;;
        *)
                echo $"Usage: $0 {start|stop|restart|reload|force-reload|condrestart|try-restart|status}"
                RETVAL=2
esac
exit $RETVAL
```

### 启动 sftp 服务

```bash
service sftpd start
service sftpd status
```

### 测试

```bash
ssh -p 20022 sftpuser@localhost          # 无法登陆
sftp -oPort=20022 sftpuser@localhost     # 可以登陆
```

###  其它

[https://github.com/ydzydzydz/sshd-sftpd/](https://github.com/ydzydzydz/sshd-sftpd/)