---
layout: post
title: CentOS7 分离 sshd、sftpd 服务
tags: Linux ssh sftp
categories: Linux
---

### 测试环境

```ini
OpenSSH_6.6.1p1, OpenSSL 1.0.1e-fips 11 Feb 2013
```

<!-- more -->

* TOC
{:toc}

### 复制相关文件

```ini
cp /usr/lib/systemd/system/sshd.service  /etc/systemd/system/sftpd.service
cp /etc/pam.d/sshd  /etc/pam.d/sftpd
cp /etc/ssh/sshd_config  /etc/ssh/sftpd_config
ln -sf  /usr/sbin/service  /usr/sbin/rcsftpd
ln -sf  /usr/sbin/sshd  /usr/sbin/sftpd
cp /etc/sysconfig/sshd  /etc/sysconfig/sftp
cp /var/run/sshd.pid  /var/run/sftpd.pid && echo > /var/run/sftpd.pid
```

### 修改 sftpd.service 文件

```bash
vi /etc/systemd/system/sftpd.service
```

```ini
# /etc/systemd/system/sftpd.service 内容如下
[Unit]
Description=sftp servier daemon                       # 需要修改
Documentation=man:sshd(8) man:sshd_config(5)
After=network.target sshd-keygen.service
Wants=sshd-keygen.service

[Service]
Type=notify                                           # 需要修改
PIDFile=/var/run/sftpd.pid                            # 需要修改
EnvironmentFile=/etc/sysconfig/sftp                   # 需要修改
ExecStart=/usr/sbin/sftpd -f /etc/ssh/sftpd_config    # 需要修改
ExecReload=/bin/kill -HUP $MAINPID
KillMode=process
Restart=on-failure
RestartSec=42s

[Install]
WantedBy=multi-user.target
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

### 防火墙放行 sftp 端口

```bash
firewall-cmd --zone=public --add-port=20022/tcp --permanent && firewall-cmd --reload
```

### 启动 sftp 服务

```bash
systemctl daemon-reload
systemctl start sftpd
```

### 测试

```bash
ssh -p 20022 sftpuser@localhost      # 无法登陆
sftp -P 20022 sftpuser@localhost     # 可以登陆
```

