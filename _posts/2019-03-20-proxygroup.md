---
layout: post
title: Surge/Quantumult策略组
tags: Surge Quantumult Proxy
categories: Surge
---

* TOC
{:toc}

## 策略组简介

Surge里的**Proxy Group**，Quantumult里的**Policy**其实都是指我们常说的**策略组**。

策略组有如下特性：

<!-- more -->

- 可以包含**节点**或**其他策略组**
- 具有多种不同的**策略类型**
- 服务于**规则**

---

## 策略组的作用

策略组的作用，就是根据不同**策略**分发**规则**传递过来的请求。

一个非常简单的规则：
```
URL-REGEX,*apple.com/cn,🍎 Only
```
它的工作方式就是正则匹配请求的URL，然后把它交给**策略组**``🍎 Only``来处理，至于``🍎 Only``最后会怎么处理，规则并不会管。

所以，这里有一个很重要的概念：**所有策略组都是服务规则的，如果规则里没有直接或间接使用这个策略组，则策略组就是多余的**。
- **直接使用**：策略组直接被规则引用
- **间接使用**：策略组被其他策略组引用，而最上级策略组被规则引用

例如：
```
[Proxy Group]
🍃 Proxy = select,🏃 Auto,🚀 Direct,ProxyHeader
🏃 Auto = url-test,ProxyHeader,url = http://www.gstatic.com/generate_204,interval = 1200
...
[Rule]
DOMAIN-SUFFIX,netflix.com,🍃 Proxy
...
```
规则中所对应的策略组``🍃 Proxy``，所以``🍃 Proxy``为**直接使用**，而``🍃 Proxy``引用了策略组``🏃 Auto``，则``🏃 Auto``为**间接使用**。

---

## 策略类型

可定义策略组类型：

类型|Surge3名称|Quantumult名称|作用
-|-|-|-
手动选择|select|Static Policy|在节点列表手动选择节点或策略组
延迟测试|url-test|Latency Policy|选择延迟相对较低的节点
网络类型|ssid|SSID Policy|根据网络类型或路由器名称选择节点或策略组
可用性测试|fallback|不支持|按照节点顺序选择第一个可用节点
负载均衡|不支持|Balance Policy|策略结果基于选用的均衡模式

内置策略组类型：

类型|Surge3名称|Quantumult名称|作用
-|-|-|-
直接连接|DIRECT|DIRECT|不进行代理
代理连接|（不内置）|PROXY|特殊的**手动选择**策略，Quantumult内置固定
拒接连接|REJECT|REJECT|阻止请求进行
GIF拒绝连接|REJECT-TINYGIF|不支持|返回1x1像素GIF代替请求内容

---

## 一个例子

![](https://github.com/Fndroid/jsbox_script/blob/master/imgs/wiki_rules_d11.png?raw=true)
### 解析
① 上图的第一行是规则的内容，代表请求匹配到Netflix的根域名``netflix.com``时，将请求交由策略组``Proxy``进行操作。

② 第二行是策略组``Proxy``的定义，类型``select``表示手动选择，此时我们选择将请求传递给策略组``Auto``进行操作。

③ 第三行是策略组``Auto``的定义，类型``url-test``表示进行延迟性测试，而``HK3``服务器当前延迟最低（90ms），所以最终将请求交由``HK3``服务器进行代理，处理过程结束。

### 疑问
既然最后会将请求交给``HK3``服务器，我们为什么不直接在规则里用``HK3``代替``Proxy``而要建立两个额外的策略组呢？

事实上，不建立额外的策略组，也是可以正常工作的。

但是如果出现下面两个情况，在不重新编写配置文件的前提下，策略组的优势就凸显出来了：
1. 出国或港澳台旅游
2. HK3服务器离线

#### 出国或港澳台旅游
假设我们进入了不需要代理就能使用Netflix的地区或国家，我们直接连接当地网络其实就可以了。而这个时候，我们会希望上面的规则命中时选择``Direct``，这个时候如果有设置策略组，只需要在策略组里选择``Direct``即可，无须修改配置文件即可实现。

#### HK3服务器离线
``url-test``策略除了能给我们选择响应速度快的服务器外，还能帮我们规避掉**离线**的服务器。按照上图的设置，如果``HK3``离线了，那么它是不可能会被延迟测试选中的（除非所有节点同时离线），那么我们在不需要修改配置文件的情况下，依旧可以使用Netflix的服务。

---

## 总结

上面给出的情况不一定贴合每个人，旨在介绍策略组的工作原理及应用。如果你有对应的需求，可以自己尝试进行配置合适自己的策略组。



---

**转载自：** [关于策略组的理解](https://github.com/Fndroid/jsbox_script/wiki/%E5%85%B3%E4%BA%8E%E7%AD%96%E7%95%A5%E7%BB%84%E7%9A%84%E7%90%86%E8%A7%A3)

