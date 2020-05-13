---
layout: post
title: CentOS 7 系列破解 root 密码及常见问题
tags: Linux SELinux
categories: Linux
---

* TOC
{:toc}
### 破解密码

1. 开机，选择内核，按 <kbd>e</kbd> 键，进入编辑

   <!-- more -->

   ![image-20200513132237455](https://github.com/ydzydzydz/blogphoto/raw/master/centos-root/1.png)

2. 添加 `rd.break` `console=tty0`，按 <kbd>Ctrl</kbd> + <kbd>x</kbd>

   ![image-20200513132223975](https://github.com/ydzydzydz/blogphoto/raw/master/centos-root/2.png)

3. 修改密码

   ```bash
   switch_root:/# mount -o remount,rw /sysroot/
   switch_root:/# chroot /sysroot/
   
   sh-4.2# unset LANG
   sh-4.2# echo "123456" | passwd --stdin root
   sh-4.2# touch /.autorelabel
   sh-4.2# exit
   
   switch_root:/# reboot
   ```

### 常见问题

1. 重启机器报错，`Failed to load SELinux policy. Freezing`，无法正常进入系统

   ```bash
# 方法一：关闭 SELinux
   sh-4.2# sed -i 's/SELINUX=enforcing/SELINUX=disabled/g'/etc/sysconfig/selinux
   
   # 方法二：修复 SELinux 安全上下文
   sh-4.2# genhomedircon
   sh-4.2# fixfiles -f relabel
   sh-4.2# touch /.autorelabel
   ```
   
2. 可以正常重启机器，但输入正确密码后无法登陆系统

   临时禁用 SELinux，修改 /etc/shadow 的安全上下文

   ![image-20200513134311484](https://github.com/ydzydzydz/blogphoto/raw/master/centos-root/3.png)

   ```bash
   # /etc/shadow 安全上下文丢失
   [root@localhost ~]# ls -Z /etc/shadow
   ----------. root root                                  /etc/shadow
   
   [root@localhost ~]# chcon system_u:object_r:shadow_t:s0 /etc/shadow
   [root@localhost ~]# ls -Z /etc/shadow
   ----------. root root system_u:object_r:shadow_t:s0    /etc/shadow
   ```

   