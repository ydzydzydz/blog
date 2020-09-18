---
layout: post
title: CentOS 7 部署虚拟专用网络（pptp 协议）
tags: Linux VPN
categories: Linux
published: false
---

**本教程仅适用于参考学习，远程访问家中或公司局域网，请勿用任何非法行为**

* TOC
{:toc}
## 简介

虚拟专用网络是在公用网络上建立专用网络，进行加密通讯。在企业网络中广泛应用。

比如人在家办公，想访问公司中的设备 A（IP：192.168.1.2），是无法访问到的

当公司的设备 A 连接到 VPN 服务器，获取到 IP：192.168.0.2

人在家的设备 B 连接到 VPN 服务器，获取到 IP：192.168.0.3

此时，设备 A 与设备 B 相当与在同一局域网内，可以互相访问

<!-- more -->

> VPN 主要工作在 OSI 参考模型的第二层（数据链路层）、第三层（网络层），所以基本可以代理所有网络流量
>
> SOCKS 代理协议工作在第四层（传输层）
>
> 而 ping 命令使用的 ICMP 协议工作在第三层（网络层），所以使用 Shadowrocks 代理时，无法 ping 通 google.com 但是却能正常访问

## 部署环境

+ 一台 CentOS 7 的服务器
+ 一个公网 IP

## 部署流程

安装软件

```bash
# 检查 yum 源
yum repolist

# 安装软件
yum -y install vim ppp iptables pptpd
```

修改配置文件

```bash
vim /etc/pptpd.conf              # 配置虚拟网络地址池
vim /etc/ppp/options.pptpd       # 配置 pptpd 服务参数
vim /etc/ppp/chap-secrets        # 配置用户名、密码、客户端IP
```

```ini
# /etc/pptpd.conf 配置文件
localip 192.168.0.1                        # 服务器的虚拟IP
remoteip 192.168.0.234-238,192.168.0.245   # VPN服务器给客户端分配的IP地址池
```

```ini
# /etc/ppp/options.pptpd 配置文件
ms-dns 8.8.8.8
ms-dns 8.8.4.4
```

```ini
# /etc/ppp/chap-secrets 配置文件
username      pptpd   password  *          # 用户名 pptpd 密码 客户端IP
zhuangzhuang  pptpd   123456    *
```

修改内核参数，开启路由转发

```bash
vim /etc/sysctl.conf
sysctl -p
```

```ini
# /etc/sysctl.conf 配置文件
net.ipv4.ip_forward=1
```

设置路由转发

```bash
iptables -t nat -A POSTROUTING -s 192.168.0.0/24 -j SNAT --to-source <公网 IP>
```

将路由转发设置开机自启

```bash
chmod +x /etc/rc.d/rc.local
echo "iptables -t nat -A POSTROUTING -s 192.168.0.0/24 -j SNAT --to-source <公网 IP>" >> /etc/rc.d/rc.local
```

启动 pptpd 服务

```bash
# 启动 pptpd 服务
service pptpd start

# 设置 pptpd 服务开机自启
chkconfig pptpd on
```

检查 pptpd 服务端口状态

```bash
ss -antulp | grep pptpd                 # 云服务器部署时，需要在安全组放行端口
```

查看防火墙路由转发规则

```bash
iptables -t nat -L -n 
```

## 客户端链接

Window 系统

<div class="mermaid">
graph LR
设置 --> 网络和Internet
网络和Internet --> VPN
VPN --> 添加VPN连接
</div>
![](https://github.com/ydzydzydz/blogphoto/raw/master/centos7-pptpd/1.png)

![](https://github.com/ydzydzydz/blogphoto/raw/master/centos7-pptpd/2.png)

![](https://github.com/ydzydzydz/blogphoto/raw/master/centos7-pptpd/3.png)

Linux 系统

> 明天再写，未完待续！！！！！

