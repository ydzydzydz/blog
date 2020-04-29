---
layout: post
title: Surge共享代理
tags: Surge HTTP 共享代理
categories: Surge
# img: https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/surge-http/1.png
---



一些使用Surge的朋友经常会问这样一个问题：

> 可以用自己的设备开启Surge，然后别人连接我开的热点，实现代理功能么？

答案是：**不能！**

但是

<!-- more -->

> Surge可以作为一个标准的HTTP/SOCKS5代理服务器向**Wi-Fi网络下**的其他设备提供服务器。默认HTTP端口：`6152`,SOCKS5端口：`6153`

如图所示：

![1234](https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/surge-http/1.png)

---

### 详细步骤

1.设备A开启热点

2.设备B连接**设备A开启的热点**

3.设备C连接**设备A开启的热点**（此时设备B,设备C在同一Wi-Fi网络下）

4.设备B开启Surge，打开`高级设置`-`允许Wi-Fi访问`，注意此时的`当前Wi-Fi IP`和 `HTTP代理服务端口`

5.设备C打开无线局域网，进入`HTTP代理设置`，选择`手动`

6.将步骤4中所查看到的`当前Wi-Fi IP`和 `HTTP代理服务端口`分别对应填写到`服务器`和`端口`存储即可

---



<img src="https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/surge-http/b.png" alt="设备B" width="50%"><img src="https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/surge-http/c.png" alt="设备C" width="50%">



此时，设备C就已经可以通过设备B中Surge提供的HTTP代理服务器上网了。

另外，Quantumult开启共享代理在`附加功能`中，`监听IP`与`监听端口`在主页显示，就不再赘述了。





