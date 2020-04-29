---
layout: post
title: 解锁网易云音乐
tags: Surge 
categories: Surge
published: false
---

最近看大佬们都在解锁网易云变灰的音乐，壮壮就自己也搭建了一个，这里就分享一点小经验吧，**仅用作学习交流**

* TOC
{:toc}
<!-- more -->

## 准备工具

+ 服务器
+ Surge

---


## 签发证书

先连接服务器，找到[上次签发](https://zhuangzhuang.cf/2019-05-12/ca/)的 CA 证书

```bash
# 切换目录
cd zhuangzhuang

# 查看
ls
```

能够找到 `ca.key`、`ca.crt`，签发服务器证书

```bash
# 生成服务器私钥
openssl genrsa -out server.key 2048

# 生成证书签发请求
openssl req -new -sha256 -key server.key -out server.csr -subj "/C=CN/L=Hangzhou/O=NetEase (Hangzhou) Network Co., Ltd/OU=IT Dept./CN=*.music.163.com"

# 使用 CA 签发服务器证书
openssl x509 -req -extfile <(printf "subjectAltName=DNS:music.163.com,DNS:*.music.163.com") -days 365 -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt
```

## 克隆仓库

**仓库地址： [https://github.com/nondanee/UnblockNeteaseMusic](https://github.com/nondanee/UnblockNeteaseMusic)**

```bash
# 切换到家目录
cd

# 克隆项目
git clone https://github.com/nondanee/UnblockNeteaseMusic.git

# 更换服务器私钥
\cp zhuangzhuang/server.key UnblockNeteaseMusic/server.key

# 更换服务器证书
\cp zhuangzhuang/server.crt UnblockNeteaseMusic/server.crt
```

## 开启服务

```bash
# 切换目录
cd UnblockNeteaseMusic

# 开启服务
forever start app.js -p 8080:8081 -e https://music.163.com

# 退出
exit
```

更多选项说明可以在 [nondanee/UnblockNeteaseMusic](https://github.com/nondanee/UnblockNeteaseMusic) 中查看

---

## 编写配置

打开 Surge，文本模式编辑

```
[Proxy]
🔑 unlock = <server ip>, 8080
🔒 lock = direct

[Proxy Group]
🎶 Music = select, 🔑 unlock, 🔒 lock

[Rule]
RULE-SET, https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/wymusic.list, 🎶 Music
```

## 信任证书

Surge 中应当信任上次签发的 `ca.crt`，并且添加相应的主机名，打开 MitM 开关，开始使用

## 最终效果

<img  style="float:left"  width="48%" src="https://github.com/ydzydzydz/blogphoto/raw/master/wymusic/2.jpg"  />

<video style="float:right" width="48%" src="https://github.com/ydzydzydz/blogphoto/raw/master/wymusic/1.mp4" controls="controls">
</video>

<br style="clear:both;" />

## 写在最后

感谢[项目](https://github.com/nondanee/UnblockNeteaseMusic)作者的努力，本篇博文仅用于学习交流（写的还不一定对，反正我是折腾了一天终于能用了）

这里只写出了一种方法，更多食用方法可查看 [issues](https://github.com/nondanee/UnblockNeteaseMusic/issues)


