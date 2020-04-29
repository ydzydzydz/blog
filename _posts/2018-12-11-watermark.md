---
layout: post
title: 抖音微视去水印配置
tags: Surge  去水印
categories: Surge
---

## 修改配置
打开Surge3,在`文本编辑模式`下对应字段复制代码如下:

<!-- more -->

### [URL Rewrite]
```
// 微视去水印下载
(?<=vide.f)7(?=\d{2}.mp4)  302

// 抖音去水印下载
(?<=\?video_id=\w{32})[^*]+  302
```

### [MITM]

hostname =
```
aweme.snssdk.com,api.amemv.com
```

---
## 参考配置

从URL下载配置:
[抖音微视去水印](https://raw.githubusercontent.com/ydzydzydz/Rules/master/conf/watermark.conf)

---
**注意:确保打开`Rewrite`和`MITM`(证书安装并信任)**
