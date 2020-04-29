---
layout: post
title: Surge代理Apple News
tags: Surge AppleNews 
categories: Surge
---

1 设置-->通用-->语言与地区-->地区-->改为美国

2 设置-->通用-->语言与地区-->iPhone 语言-->改为 English

3 打开 Apple Store -->登陆美区 ID

4 下载 News（此时桌面出现 News 图标，可以打开，但无内容）
    <!-- more -->

   <img src="https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/applenews/1.jpg" />

5 打开 Surge -->  文本编辑模式

6 添加策略组

```
[Proxy Group]
📡 AppleNews = select, 🍃 Proxy, 🛥 Select, 🚀 Direct      // 地区限制
🧾 AppleNews = select, 🍃 Proxy, 🛥 Select, 🚀 Direct       // AppleNews
```

7 添加规则

```
[Rule]
RULE-SET,https://raw.githubusercontent.com/ydzydzydz/Rules/master/special/applenews-region.list,📡 AppleNews                  // 地区限制
RULE-SET,https://raw.githubusercontent.com/ydzydzydz/Rules/master/special/applenews.list,🧾 AppleNews                         // AppleNews
```

8 现在就可以正常打开 Apple News 了

<video  width="100%" src="https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/applenews/2.mp4" controls="controls">
   </video>


---

**注意：尽量保持在 Wifi 网络下访问**

**规则来自：[Bumped Into](https://blog.dada.li/2019/using-apple-news-in-china-mainland)**


