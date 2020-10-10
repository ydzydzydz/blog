---
layout: post
title: kickstart 构建 checkra1n.iso (Live CD)
tags: Linux
categories: Linux
---

* TOC
{:toc}
### 下载 ckeckra1n

```bash
wget -o /root/checkra1n https://assets.checkra.in/downloads/linux/cli/x86_64/xxxx/checkra1n
```

<!-- more -->

### 挂载 CentOS 7 镜像

```bash
# 挂载镜像，用作本地 yum 源，无需联网下载软件包，如果需要 uefi 启动，则略过此步，使用官方源，就是比较慢
mkdir /mnt/iso
mount /dev/cdrom /mnt/iso
```

### 加密 root 密码

```bash
openssl passwd -1 "password"
$1$vPq2UabN$DATT2oainItD16W9OxyPd1
```

### 编写 Kickstart 文件

```bash
# 用于设置 Live CD 系统语言，指定安装的软件包，启动服务，执行脚本等
vim checkra1n.cfg
```

```bash
# ckeckra1n.cfg

# 设置语言
lang      en_US.UTF-8
# 设置键盘类型
keyboard  us
# 设置系统时区
timezone  America/Los_Angeles --isUtc
# 设置系统验证选项# 设置系统验证选项
auth      --useshadow --enablemd5
# 设置 root 密码
rootpw    --iscrypted $1$vPq2UabN$DATT2oainItD16W9OxyPd1
# 决定 Initial Setup 程序是否在第一次引导系统时启动
firstboot --disable
# 为安装的系统指定防火墙配置
firewall  --disable
# 在系统中创建分区
part /    --size 8192 --fstype ext4
clearpart --all --initlabel

# 配置 yum 源
# repo --name=base 	--baseurl=file:///mnt/iso/ 
repo --name="base" 	--baseurl=http://mirror.centos.org/centos/7/os/x86_64/ 
repo --name="updates" 	--baseurl=http://mirror.centos.org/centos/7/updates/x86_64/ 
repo --name="extra" 	--baseurl=http://mirror.centos.org/centos/7/extras/x86_64/ 
repo --name="epel" 	--baseurl=http://mirror.mrjester.net/fedora/epel/7/x86_64/

# 指定内核参数
bootloader  --append=" crashkernel=auto" --location=mbr --boot-drive=sda
# dhcp 获取 ip（需要安装dhclient），指定 DNS，设置主机名
network     --bootproto=dhcp --device=ens33 --noipv6 --nameserver=114.114.114.114 --hostname=zhuangzhuang.checkra1n

# 安装软件包
%packages
bash
kernel
syslinux
passwd
policycoreutils
dhclient
usbmuxd
authconfig
rootfiles
firewalld

# uefi 启动需要软件包
#########################
efibootmgr 
grub2-efi-x64 
grub2-efi-x64-cdboot 
grub2-efi-x64-modules 
grub2-pc 
grub2-pc-modules 
grub2-tools* 
shim-x64
#########################
%end

# 将文件拷贝到 Live CD 系统
%post --nochroot
cp /root/checkra1n $INSTALL_ROOT/bin/
%end

# 预安装脚本
%post
chmod +x /bin/checkra1n
echo "/bin/checkra1n -V" >> /etc/bashrc
%end
```

### 检查 Kickstart 文件

```bash
yum -y install pykickstart
ksvalidator checkra1n.cfg
```

### 构建 Live CD

```bash
livecd-creator -c checkra1n.cfg -f checkra1n -d
ls -lh checkra1n.iso
```

> 本来阿永说用 Ubuntu 做 Live CD 的
>
> 找到两个项目 remastersys 和 respin，但是已经不维护了
>
> 找了半天依赖，最后构建出来的 Live CD 启不来（Ubuntu 系统版本比较高，低版本可以试试）

---

### 更多 kickstart

checkra1n.iso kickstart: <https://github.com/ydzydzydz/checkra1n.iso>

Centos 7 Live CD kickstart：<https://github.com/CentOS/sig-core-livemedia>

官方 Kickstart 文件语法：<https://access.redhat.com/documentation/zh-cn/red_hat_enterprise_linux/7/html/installation_guide/sect-kickstart-howto>

