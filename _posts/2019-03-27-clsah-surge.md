---
layout: post
title: Surge搭配Clash使用
tags: Surge Clash 
categories: Surge
---

1 将安装有 Surge 的设备与安装有 Clash 的设备连接至同一 Wifi 网络下

2 修改 Clash 配置文件

```yaml
allow-lan: true
```

<!-- more -->

3 查看 Clash 配置文件中的 HTTP 端口和 SOCKS5 端口

```yaml
port: 8888
socks-port: 8889
```

4 `Win`+`R`-->cmd-->确定-->查看内网 IP

```
ipconfig
```

**在 Clash for Windows 中，General界面可直接查看到端口号，鼠标悬停在`Allow LAN`显示内网 IP**

<img width="80%" src="https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/clash-surge/1.jpg" />

5 打开 Surge ，文本模式编辑，添加代理和策略组，将上两步所查看到的内网 IP 和端口填写到对应位置

```ini
[Proxy]
⏸ OFF = direct
▶️ HTTP = http, [SERVER ADDRESS], 8888
▶️ SOCKS5 = socks5, [SERVER ADDRESS], 8889

[Proxy Group]
🐱 Clash = select, ⏸ OFF, ▶️ HTTP, ▶️ SOCKS5

[Rule]
FINAL,🐱 Clash,dns-failed
```

6 此时，就可以借助 Clash 中的代理上网了

<img width="50%" src="https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/clash-surge/2.jpg" />



<style> 
    .post img{
	 margin-left: auto;
     margin-right: auto;
     display: block
}
</style>