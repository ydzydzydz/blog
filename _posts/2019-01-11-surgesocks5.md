---
layout: post
title: Surge通过SOCKS5代理Telegram
tags: Surge Telegram
categories: Surge
---

**代理设置**

> Surge iOS

1.出站模式选择规则模式或全局代理即可

2.设置SOCKS5代理（据说刷图会快一些）

* 打开Telegram

* 设置—>数据和存储—>代理—>使用代理—>SOCKS5

* 连接信息：服务器`127.0.0.1`(或`0.0.0.0`)，端口`6153`

<div align="center"><img src="https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/socks5/tg.png" width="50%"  /></div>

[点击设置](https://t.me/socks?server=127.0.0.1&port=6153)

> Surge Mac

1.开启增强模式

2.设置SOCKS5代理

* 打开Surge for Mac：设置—>通用—>代理服务—>允许远程访问—>`高级代理服务设置`，查看SOCKS5监听端口(默认为`6153`)

![socks5](https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/socks5/socks5.png)


* 打开Telegram,设置SOCKS5代理：服务器`127.0.0.1`(或`0.0.0.0`)，端口`6153`(如果有自定义端口，填写为上步查看到的端口)

[6153端口](https://t.me/socks?server=127.0.0.1&port=6153)

[8889端口](https://t.me/socks?server=127.0.0.1&port=8889)

---

**代理规则**

> Surge 3 Mac (Surge 3.4 for iOS)

```
[Rule]
# Telegram
RULE-SET,https://raw.githubusercontent.com/ydzydzydz/Rules/master/special/telegram.list，PROXY
```

> Surge 2 Mac (Surge 3/2 for iOS)

```
[Rule]
# Telegram
IP-CIDR,67.198.55.0/24,PROXY,no-resolve
IP-CIDR,91.108.4.0/22,PROXY,no-resolve
IP-CIDR,91.108.8.0/22,PROXY,no-resolve
IP-CIDR,91.108.12.0/22,PROXY,no-resolve
IP-CIDR,91.108.16.0/22,PROXY,no-resolve
IP-CIDR,91.108.56.0/22,PROXY,no-resolve
IP-CIDR,109.239.140.0/24,PROXY,no-resolve
IP-CIDR,149.154.160.0/20,PROXY,no-resolve
IP-CIDR,149.154.164.0/22,PROXY,no-resolve
IP-CIDR,149.154.168.0/22,PROXY,no-resolve
IP-CIDR,149.154.172.0/22,PROXY,no-resolve
IP-CIDR,205.172.60.0/22,PROXY,no-resolve
```
