---
layout: post
title: Quantumult配置详解
tags: Quantumult
categories: Quantumult
password: zhuangzhuang
prompt: 密码是zhuangzhuang\n也不知道写的对不对😭
alert: 等我写完
---

在 Quantumult 中，很多设置在 UI 界面中操作要比直接书写配置文件要简单清晰的多。比如：订阅服务器、订阅分流规则、订阅链接阻止、自定义策略组、批量修改分流规则等等，因此不建议直接修改配置文件，直接在 UI 中操作就好了。如果想自己制作订阅链接，可以了解一下

与 Surge 不同的是，在 Quantumult 中，如果配置文件中有错误的内容会直接忽略（可能会修改为正确写法或直接删除），不会像 Surge 一样，必须配置文件完全正确才能使用

本文内容仅供参考，不保证完全正确，如有错误，欢迎留言指正



<!-- more -->

* TOC
{:toc}
---

## [SERVER]

`服务器节点`

（『设置--服务器』『设置--订阅--服务器』）

以下只做简单示例，建议在 UI 中直接添加或订阅

* Shadowsocks

  ```
  Shadowsocks01 = shadowsocks, 1.1.1.1, 1234, aes-128-cfb, "password",  upstream-proxy=false, upstream-proxy-auth=false
  ```

* ShadowsocksR

  ```
  ShadowsocksR01 = shadowsocksr, 1.1.1.1, 1234, aes-128-cfb, "password", protocol=auth_china_b, obfs=tls1.2_ticket_fastauth
  ```

* HTTP（over TLS）

  ```
  HTTP01 = http, upstream-proxy-address=1.1.1.1, upstream-proxy-port=1234, upstream-proxy-auth=false, over-tls=false, certificate=0
  ```

* SOCKS5（over TLS）

  ```
  SOCKS501 = socks5, upstream-proxy-address=1.1.1.1, upstream-proxy-port=1234, upstream-proxy-auth=false, over-tls=false, certificate=0
  ```

* VMess（webSocket + TLS）

  ```
  VMess01 = wmess, 1.1.1.1, 1234, aes-128-cfb, "F24536F7-456C-449F-B4D3-9F934C6F0FEB", over-tls=false, certificate=0
  ```

## [SOURCE]

`订阅链接`

（『设置--订阅』）

* 服务器订阅

  部分更新：只更新本地已有服务器信息

  更新检测：自动检测更新

  个性化：更新时不更新对应服务器名称

  自动检测更新将会在每次打开 Quantumult 时进行（离上次检测时间不超过20分钟不会进行检测）。

  Quantumult 仅检测自上次更新后，订阅内容是否有更改。如果您对本地存储的服务器配置相关参数进行自定义，或者删除不需要的并不会触发更新提示，以满足自定义需求的同时也能检查订阅内容是否有变更。

  如果您是从外部导入的配置文件，建议在导入完成后更新一次服务器订阅以同步更新记录。

  ```
  Server-name, server, https://example.com/server.conf, true, true, true
  ```

* 分流规则订阅

  个性化：更新时提供策略替换面板

  ```
  Filter-name, filter, https://example.com/filter.conf, true
  ```

* 链接阻止订阅

  包含主机名：同时更新 HTTPS 解密配置的主机名

  ```
  Blacklist-name, blacklist, https://example.com/black.list.conf, true
  ```

## [BACKUP-SERVER]

`显示在 widget 中的服务器列表`

写法为一行一个名称

```
ProxyA
ProxyB
ProxyC
ProxyD
```

## [SUSPEND-SSID]

`连接到特定的 Wi-Fi 挂起 Quantumult`

```
WiFi-Name
```

## [POLICY]

`自定义策略组`

（『设置--策略』）

需要base64编码，建议在 UI 中修改或添加

* 环境策略

  策略结果基于网络环境，当连接到特定的 SSID 时，SSID 行为会覆盖 Wi-Fi 行为

  例如：策略组 NameA，连接到普通wifi时策略结果为 ProxyA，蜂窝网络时策略结果为 ProxyB，连接到 WifiA 时策略结果为 ProxyC，连接到 WifiB 时策略结果为 ProxyD

  ```
  NameA : wifi = ProxyA, celluar = ProxyB
  WifiA = ProxyC
  WifiB = ProxyD
  ```

* 延迟策略

  策略结果由 URL 延迟检测技术指定（测试周期 600 秒）

  对于共享服务器，由于低延迟服务器拥挤程度较高，个人分配带宽可能会比较低，该策略不建议用于流媒体播放

  例如：策略组 NameB，策略结果为 ProxyA、ProxyB、ProxyC、ProxyD 中延迟相对较低的

  ```
  NameB : auto
  ProxyA
  ProxyB
  ProxyC
  ProxyD
  ```

* 静态策略

  策略结果由用户指定

  例如：策略组 NameC，包含策略 ProxyA、ProxyB、ProxyC、ProxyD，指定使用 ProxyA

  ```
  NameC : static, ProxyA
  ProxyA
  ProxyB
  ProxyC
  ProxyD
  ```

* 负载均衡

  策略结果由均衡模式指定，目前仅支持 Round Robin 模式，该模式下所有服务器将被等权重的使用。

  由于各服务器被等权重的使用，终点 IP 将会随着所使用的服务器而随时变换，请谨慎使用该策略。

  例如：策略组 NameD，ProxyA、ProxyB、ProxyC、ProxyD 将被等权重的使用

  ```
  NameD : balance, round-robin
  ProxyA
  ProxyB
  ProxyC
  ProxyD
  ```

## [DNS]

`域名解析服务器`

（『设置--域名解析』）

留空将使用设备当前网络获取的参数（非输入占位符 IP）

Quantumult 将会对所有域名解析服务器进行并发查询，并使用响应最早的结果进行连接，如果您不会网络调试，请务必留空。

```
system,1.2.4.8,80.80.80.80,80.80.81.81,1.1.1.1,1.0.0.1
```

## [REWRITE]

`重定向`

（『设置--HTTP 复写』）

> 这一段是我瞎写的，大致应该差不多，实在是没找到官方手册 😭
>
> 对于这一部分不是很理解，网上找了一篇相关的介绍：[『传送门』](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections)

重定向为一个链接（http://example.com）或 base64 编码的响应(包括header、body 和 /r/n)，用于简单响应

* Modify

  ```
  ^http://example.com url modify http://zhuangzhuang.cf
  ```

* 302

  Found：要求客户端执行临时重定向（原始描述短语为“Moved Temporarily”）。

  由于这样的重定向是临时的，客户端应当继续向原有地址发送以后的请求。只有在 Cache-Contral 或 Expires 中进行了指定的情况下才是可缓存的。

  新的临时性的 URI 应当在响应的 Location 域中返回。除非这是一个 HEAD 请求，否则响应的实体中应当包含指向新的 URI 的超链接及简短说明。如果这不是一个 GET 请求或者 HEAD 请求，那么浏览器禁止自动进行重定向，除非得到用户的确认，因为请求的条件可能因此发生变化。

  ```
  ^http://example.com url 302 http://zhuangzhuang.cf
  ```

* 307

  临时重定向：请求与另一个 URI 重复，但后续的请求应仍使用原始的 URI。

  与 302 恰恰相反，当重新发出原始请求时，不允许更改请求方法。

  例如，应该使另一个 POST 请求来重复 POST 请求。

  ```
  ^http://example.com url 307 http://zhuangzhuang.cf
  ```

* Simple Response

  重定向为 Base64 编码

  ```
  ^http://example.com url simple-response SFRUUC8xLjEgMjAwIE9LDQpTZXJ2ZXI6IG5naW54DQpDb250ZW50LVR5cGU6IGltYWdlL3BuZw0KQ29udGVudC1MZW5ndGg6IDU2DQpDb25uZWN0aW9uOiBjbG9zZQ0KDQqJUE5HDQoaCgAAAA1JSERSAAAAAQAAAAEIBgAAAB8VxIkAAAALSURBVHicY2AAAgAABQABel6rPw==
  ```

## [URL-REJECTION]

`链接阻止`

（『设置--链接阻止』）

支持正则表达式

```
ˆhttps?://exampleA.com/example/.*
ˆhttps?://exampleB.com/example/.*
ˆhttps?://exampleC.com/example/.*
```

## [TCP]

`分流规则`

（『设置--分流』）

当匹配到对应类型的 TCP 流量，该流量走向将由设置中的『行为』决定

* HOST

  根据域名匹配

  远程解析 TUN 连接

  ```
  HOST,zhuangzhuang.cf,PROXY,resolve-on-proxy
  ```

* HOST-SUFFIX

  根据域名后缀匹配

  ```
  HOST-SUFFIX,zhuangzhuang.cf,PROXY
  ```

* HOST-KEYWORD

  根据域名中包含的关键词匹配

  ```
  HOST-KEYWORD,zhuangzhuang,PROXY
  ```

* USER-AGENT

  根据请求的 User Agent 匹配

  ```
  USER-AGENT,telegram*,PROXY
  ```

* GEOIP

  根据 IP 的国家信息匹配

  不解析

  ```
  GEOIP,CN,DIRECT,no-resolve
  ```

* NO-GEOIP

  根据 IP 的国家信息匹配

  ```
  NO-GEOIP,CN,PROXY
  ```

* IP-CIDR

  根据访问的 IP 段匹配

  ```
  IP-CIDR,127.0.0.0/8,DIRECT
  ```

* FINAL

  以上所有未匹配到的

  ```
  FINAL,PROXY
  ```

## [GLOBAL]

`预设策略`

用于选择预设策略 PROXY

```
SELECTED,ProxyA
```

## [HOST]

`域名 IP 映射`

（『设置--域名解析--高级』）

```
zhuangzhuang.cf = 1.1.1.1
```

## [STATE]

`选择运行模式`

（『设置--运行模式』）

* 全局代理

  所有 TCP 流量将通过策略 PROXY 指定的服务器进行转发

  ```
  STATE,GLOBAL
  ```

* 自动分流

  所有 TCP 流量将通过『设置--分流』配置进行分流

  ```
  STATE,AUTO
  ```

* 全局直连

  所有 TCP 流量将直接发往目的地址

  ```
  STATE,DIRECT
  ```

**运行时可在 Widget 切换模式**

## [MITM]

`HTTPS 解密`

（『设置--HTTPS 解密--主机名』）

使用前，需要到『描述文件』中**安装**证书，『证书信任设置』中**启用**证书

主机名

```
hostname = *.12306.cn,*.bdimg.com
```

P12 密码

```
ca-passphrase = EDD5D068
```

base64 编码过的 P12 文件

```
ca-p12 = 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
```

## 大佬们的规则

| 项目地址                                                     | 工具                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [ConnersHua/Profiles](https://github.com/ConnersHua/Profiles) | [快捷指令](https://www.icloud.com/shortcuts/44f0cffd3ddf422ea28fb94380cec417) |
| [Hackl0us/SS-Rule-Snippet](https://github.com/Hackl0us/SS-Rule-Snippet) | [快捷指令](https://www.icloud.com/shortcuts/884f18991ad14e69b0c13a1a4e7b3aac) |
| [lhie1/Rules](https://github.com/lhie1/Rules)                | [JSBox](https://xteko.com/redir?name=Rules-lhie1&url=https://raw.githubusercontent.com/Fndroid/jsbox_script/master/Rules-lhie1/.output/Rules-lhie1.box) |

<style>
    .post table{
        margin:0 auto;
    }
</style>