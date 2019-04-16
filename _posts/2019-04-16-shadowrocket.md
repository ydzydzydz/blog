---
layout: post
title: Shadowrocket配置详解
tags: 科学上网 Shadowrocket Rules
categories: Shadowrocket Rules
---

Shadowrocket（小火箭）的配置文件相对于 Quantumult 和 Surge 而言要简单得多，并不复杂

Shadowrocket 使用简单，支持协议众多，没有复杂难懂的策略组，通常导入配置，订阅服务器即可使用



<!-- more -->

* TOC
{:toc}
---

## [General]

`通用部分`

**旁路系统**

如果禁用此选项，它可能会导致一些系统问题，如推送通知延误。

```
bypass-system = true
```

**DNS 复写**

可以使用此选项覆盖默认的 DNS 服务器。

```
dns-server = system, 223.5.5.5, 223.6.6.6, 8.8.8.8, 8.8.4.4
```

**跳过代理**

此选项强制这些域名或 IP 的连接范围由 Shadowrocket TUN 接口处理，而不是 Shadowrocket 代理服务器。此项目用于解决一些应用程序的兼容性问题。

```
skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, 17.0.0.0/8, localhost, *.local, *.crashlytics.com
```

**旁路TUN**

Shadowrocket TUN 接口只能处理 TCP 协议。使用此选项可以绕过指定的 IP 范围，让其它协议通过。

```
bypass-tun = 10.0.0.0/8, 100.64.0.0/10, 127.0.0.0/8, 169.254.0.0/16, 172.16.0.0/12, 192.0.0.0/24, 192.0.2.0/24, 192.88.99.0/24, 192.168.0.0/16, 198.18.0.0/15, 198.51.100.0/24, 203.0.113.0/24, 224.0.0.0/4, 255.255.255.255/32
```

---

## [Rule]

`规则部分`

**DOMAIN**

根据域名匹配

```
DOMAIN,zhuangzhuang.cf,DIRECT
```

**DOMAIN-SUFFIX**

根据域名后缀匹配

```
DOMAIN-SUFFIX,zhuangzhuang.cf,DIRECT
```

**DOMAIN-KEYWORD**

根据域名中关键词匹配

```
DOMAIN-KEYWORD,zhuangzhuang.cf,DIRECT
```

* 强制远程 DNS 解析

  ```
  DOMAIN,zhuangzhuang.cf,PROXY,force-remote-dns
  DOMAIN-SUFFIX,zhuangzhuang.cf,PROXY,force-remote-dns
  DOMAIN-KEYWORD,zhuangzhuang.cf,PROXY,force-remote-dns
  ```

**USER-AGENT**

根据请求的 User Agent 匹配

```
USER-AGENT,AppStore*,DIRECT
```

**IP-CIDR**

根据访问的 IP 段匹配

```
IP-CIDR,127.0.0.0/8,DIRECT
```

* 不解析域名

  ```
  IP-CIDR,127.0.0.0/8,DIRECT,no-resolve
  ```

**GEOIP**

根据 IP 的国家信息匹配

```
GEOIP,CN,DIRECT
```

**FINAL**

以上所有未匹配到的

```
FINAL,PROXY
```

**值得一提的是 Shadowrocket 不支持自定义策略组（也有可能是我不会），内置了三种策略：`DIRECT`、`PROXY`、`REJECT`，书写规则时可直接使用，或者直接指定某一节点：ProxyA、ProxyB、ProxyC 等**

---

## [Host]

`域名 IP 映射`

```
zhuangzhuang.cf = 1.1.1.1
```

---

## [URL Rewrite]

`URL 重写`

**header**

```
^https?:\/\/union\.click\.jd\.com\/jda? http://union.click.jd.com/jda?adblock= header
```

**302**

```
^https?:\/\/(www\.)?g\.cn https://www.google.com 302
```

**reject**

```
^https?:\/\/.+\/hls.cache.p4p\/ - reject
```

**proxy**

```
^https?:\/\/zhuangzhuang\.cf\/  proxy
```

**direct**

```
^https?:\/\/zhuangzhuang\.cf\/  direct
```

**前三种不懂的 Google 即可，对于最后两种我也没搞懂是什么作用，得找个时间问问大佬们**

---

## [Mitm]

`HTTPS 解密`

启用 HTTPS 解密，会使用中间人攻击的方式解密 HTTPS 流量

```
enable = true
```

域名

Shadowrocket 仅会解密指定的域名请求，可以使用通配符

```
hostname = zhuangzhuang.cf,google.com
```

**Shadowrocket 不可以像 Quantumult 和 Surge 一样把证书写在配置文件里，只能通过手动生成**

---

## 大佬们的规则

* [Shadowrocket@lhie1](https://raw.githubusercontent.com/lhie1/Rules/master/Shadowrocket.conf)

  [https://raw.githubusercontent.com/lhie1/Rules](https://raw.githubusercontent.com/lhie1/Rules)

* [Shadowrocket@ConnersHua](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Shadow/Pro.conf)

  [https://github.com/ConnersHua/Profiles](https://github.com/ConnersHua/Profiles)
  
* [Shadowrocket@Hackl0us](https://raw.githubusercontent.com/Hackl0us/SS-Rule-Snippet/master/LAZY_RULES/Shadowrocket.conf)

  [https://github.com/Hackl0us/SS-Rule-Snippet](https://github.com/Hackl0us/SS-Rule-Snippet)



