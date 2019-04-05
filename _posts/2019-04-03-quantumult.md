---
layout: post
title: Quantumult配置详解
tags: Quantumult
categories: Quantumult
password: zhuangzhuang
prompt: 密码是zhuangzhuang\n还没写完，先占个坑😂
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

  

## [BACKUP-SERVER]

## [SUSPEND-SSID]

`连接到特定的 Wi-Fi 挂起 Quantumult`

## [POLICY]

`自定义策略组`

需要base64编码，建议在UI中修改

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

  例如：策略组 NameB，策略结果为 ProxyA、ProxyB、ProxyC、ProxyD 中相对较低的

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

留空将使用设备当前网络获取的参数（非输入占位符 IP ）

Quantumult 将会对所有域名解析服务器进行并发查询，并使用响应最早的结果进行连接，如果您不会网络调试，请务必留空。

```
system,1.2.4.8,80.80.80.80,80.80.81.81,1.1.1.1,1.0.0.1
```

## [REWRITE]

`重定向`

* Modify

* 302

* 307

* Simple Response

## [URL-REJECTION]

`链接阻止`

支持正则表达式

```
ˆhttps?://example.com/example/.*
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

主机名

```
hostname = *.12306.cn,*.bdimg.com
```

