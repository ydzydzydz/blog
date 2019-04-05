---
layout: post
title: Quantumult配置详解
tags: Quantumult
categories: Quantumult
password: zhuangzhuang
prompt: 还没写完，先占个坑😂
alert: 等我写完
---





正在准备写，emmmmm

目前毫无头绪 ，先占个位置 😂😂😂

<!-- more -->

* TOC
{:toc}
---

## [SERVER]

服务器

## [SOURCE]

## [BACKUP-SERVER]

## [SUSPEND-SSID]

ssid 挂起

## [POLICY]

自定义策略组

需要base64编码，建议在UI中修改

## [DNS]

强制dns

```
system,1.2.4.8,80.80.80.80,80.80.81.81,1.1.1.1,1.0.0.1
```



## [REWRITE]

重定向

* Modify

* 302

* 307

* Simple Response

## [URL-REJECTION]

拦截阻止

正则表达式

## [TCP]

规则

* HOST

* HOST-SUFFIX

* HOST-KEYWORD

* USER-AGENT

* GEOIP

* NO-GEOIP

* IP-CIDR

## [GLOBAL]

## [HOST]

指定DNS

## [STATE]

运行模式

* 全局代理

  ```
  STATE,GLOBAL
  ```

  

* 自动分流

  ```
  STATE,AUTO
  ```

  

* 全局直连

  ```
  STATE,DIRECT
  ```

  

## [MITM]

证书

主机名

```
hostname = *.12306.cn,*.bdimg.com
```

