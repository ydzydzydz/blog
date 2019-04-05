---
layout: post
title: Quantumult配置详解
tags: Quantumult
categories: Quantumult
password: zhuangzhuang
prompt: 密码是zhuangzhuang\n也不知道写的对不对😭\n还没写完，先占个坑😂
alert: 等我写完
---





正在准备写，emmmmm

目前毫无头绪 ，先占个位置 😂😂😂

<!-- more -->

* TOC
{:toc}
---

## [SERVER]

`服务器节点`

以下只做简单示例，建议在 UI 中添加

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

* 服务器订阅

  部分更新：只更新本地已有服务器信息

  更新检测：自动检测更新

  个性化：更新时不更新对应服务器名称

  自动检测更新将会在每次打开 Quantumult 时进行（离上次检测时间不超过20分钟不会进行检测）。

  Quantumult 仅检测自上次更新后，订阅内容是否有更改。如果您对本地存储的服务器配置相关参数进行自定义，或者删除不需要的并不会触发更新提示，以满足自定义需求的同时也能检查订阅内容是否有变更。

  如果您是从外部导入的配置文件，建议在导入完成后更新一次服务器订阅以同步更新记录。

  ```
  Server-name, server, https://server.com/server.conf, true, true, true
  ```

* 分流规则订阅

  个性化：更新时提供策略替换面板

  ```
  Filter-name, filter, https://filter.com/filter.conf, true
  ```

* 链接阻止订阅

  包含主机名：同时更新 HTTPS 解密配置的主机名

  ```
  Blacklist-name, blacklist, https://blacklist.com/black.list.conf, true
  ```


## [SUSPEND-SSID]

`连接到特定的 Wi-Fi 挂起 Quantumult`

```
WiFi-Name
```

## [POLICY]

`自定义策略组`

需要base64编码，建议在 UI 中修改

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

留空将使用设备当前网络获取的参数（非输入占位符 IP）

Quantumult 将会对所有域名解析服务器进行并发查询，并使用响应最早的结果进行连接，如果您不会网络调试，请务必留空。

```
system,1.2.4.8,80.80.80.80,80.80.81.81,1.1.1.1,1.0.0.1
```

## [REWRITE]

`重定向`

> 这一段是我瞎写的，实在是没找到官方手册 😭

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

支持正则表达式

```
ˆhttps?://exampleA.com/example/.*
ˆhttps?://exampleB.com/example/.*
ˆhttps?://exampleC.com/example/.*
```

## [TCP]

`分流规则`

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
  GEOIP,CN,no-resolve
  ```

* NO-GEOIP

  ```
  
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

```
zhuangzhuang.cf = 1.1.1.1
```

## [STATE]

`选择运行模式`

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

使用前，需要到『描述文件』中**安装**证书，『证书信任设置』中**启用**证书

主机名

```
hostname = *.12306.cn,*.bdimg.com
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