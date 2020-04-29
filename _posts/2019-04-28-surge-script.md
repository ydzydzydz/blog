---
layout: post
title: Surge支持Javascript
tags: Surge 
categories: Surge
password: zhuangzhuang
prompt: 请输入密码
alert: 密码错误
published: false
---

最近 Surge 又更新了，支持 Javascript 了，更强大了。

意味着 Surge 可以通过脚本执行更多的操作，更像是一个`网络调试`软件，而非`翻墙工具`了。

可以借助 Javascript 不仅仅只是去广告，但是去广告的效果会更好。

<!-- more -->

---

例如：

## 去微博应用内广告

**代码来源：[yichahucha/surge](https://github.com/yichahucha/surge)**

```ini
[Script]

# 去微博应用内广告
http-response ^https?:\/\/api\.weibo\.cn\/2(\/groups\/timeline|\/statuses\/unread|\/statuses\/extend|\/comments\/build_comments|\/photo\/recommend_list|\/stories\/video_stream|\/statuses\/positives\/get|\/stories\/home_list|\/profile\/statuses|\/statuses\/friends\/timeline) script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js

# 微博启动页广告
http-response ^https?:\/\/(sdk|wb)app\.uve\.weibo\.com(\/interface\/sdk\/sdkad.php|\/wbapplua\/wbpullad.lua) script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js
```

主机名添加：`api.weibo.cn`、`*.uve.weibo.com`

```ini
[MITM]

hostname = api.weibo.cn, *.uve.weibo.com
```

## 借助Surge防剧透

**代码来源：[Blankwonder](https://gist.github.com/Blankwonder/72fcdd46d1d9148f5461c6b59d859551)**

```ini
[Script]

# 防剧透
http-response .* script-path=https://gist.githubusercontent.com/Blankwonder/72fcdd46d1d9148f5461c6b59d859551/raw/12fd2c6b1be806596766f5fab825d1bd5f770cb2/anti-spoiler.js
```

主机名

```ini
[MITM]

# 全局生效
hostname = *
```

## 酷我音乐

**代码来源：[Choler/Surge](https://github.com/Choler)**

```ini
[Script]

# 酷我音乐
http-response ^http://vip1\.kuwo\.cn/vip/ script-path=https://raw.githubusercontent.com/ydzydzydz/Rules/master/resources/js/Music.js
```

## 去微信广告

**代码来源：[Choler/Surge](https://github.com/Choler)**

```ini
[Script]

# 去微信广告
http-response ^https?://mp\.weixin\.qq\.com/ script-path=https://raw.githubusercontent.com/ydzydzydz/Rules/master/resources/js/WeChat.js
```

主机名添加：`mp.weixin.qq.com`

```ini
[MITM]

hostname = mp.weixin.qq.com
```

## 微信阅读小程序

**代码来源：[Choler/Surge](https://github.com/Choler)**

```ini
[Script]

# 微信阅读小程序
http-response ^https?://i\.weread\.qq\.com/pay/memberCard script-path=https://raw.githubusercontent.com/ydzydzydz/Rules/master/resources/js/WeRead.js 
```

主机名添加：`i.weiread.qq.com`

```ini
[MITM]

hostname = i.weiread.qq.com
```

## RRtv

**代码来源：[Choler/Surge](https://github.com/Choler)**

```ini
[Script]

# RRtv
http-response ^https?://api\.rr\.tv/ script-path=https://raw.githubusercontent.com/ydzydzydz/Rules/master/resources/js/RRtv.js
```

主机名添加：`api.rr.tv`

```ini
[MITM]

hostname = api.rr.tv
```

## 知音漫客

**代码来源：[mieqq/mieqq](https://github.com/mieqq/mieqq)**

```ini
[Script]

# 知音漫客
http-response getuserinfo-globalapi.zymk.cn script-path=https://raw.githubusercontent.com/mieqq/mieqq/master/zymk.js
```

主机名添加：`*.zymk.cn`

```ini
[MITM]

hostname = *.zymk.cn
```

## 知乎去广告

**代码来源：[onewayticket255/Surge-Script](https://github.com/onewayticket255/Surge-Script)**

```ini
[Script]

# 知乎去广告
http-response https://api.zhihu.com/(topstory/follow|moments) script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20feed.js
http-response https://api.zhihu.com/topstory/recommend script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20recommend.js
http-response https://api.zhihu.com/v4/questions script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20answer.js
http-response https://api.zhihu.com/market/header script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20market.js
```

主机名添加：`api.zhihu.com`

```ini
[MITM]

hostname = api.zhihu.com
```

## bilibili概念版去广告

**代码来源：[onewayticket255/Surge-Script](https://github.com/onewayticket255/Surge-Script)**

```ini
[Script]

# bilibili概念版去广告
http-response https://app.bilibili.com/x/resource/show/tab script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20tab.js
http-response https://app.bilibili.com/x/channel/list script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20channel.js
http-response https://app.bilibili.com/x/v2/feed script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20feed.js
http-response https://app.bilibili.com/x/v2/account/mine script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20account.js
http-response https://app.bilibili.com/x/v2/view.access_key script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20view%20relate.js
```

主机名添加：`api.bilibili.com`

```ini
[MITM]

hostname = app.bilibili.com
```

## 简体转换为繁体

**代码来源：[mieqq/mieqq](https://github.com/mieqq/mieqq)**

```ini
[Script]

# 简体转换为繁体
http-response .* script-path=https://raw.githubusercontent.com/mieqq/mieqq/master/SimplifiedToTraditional.js
```

主机名

```ini
[MITM]

# 全局转换
hostname = *
```

## Meeta (石头阅读）

**代码来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)**

```ini
[Script]

# Meeta (石头阅读）
http-response https?:\/\/app\.stoneread\.com/api\/apiClient\/index\?data script-path=https://raw.githubusercontent.com/MeetaGit/MeetaRules/master/Surge/Scripting/StoneRead.js
```

主机名添加：`app.stoneread.com`

```ini
[MITM]

hostname = app.stoneread.com
```

##  Meeta （网易漫画）

**代码来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)**

```ini
[Script]

# Meeta（网易漫画）
http-response https?:\/\/api\.mh\.163.com\/getUserProfile script-path=https://raw.githubusercontent.com/MeetaGit/MeetaRules/master/Surge/Scripting/wymh.js
```

主机名添加：`api.mh.163.com`

```ini
[MITM]

hostname = api.mh.163.com
```

## Meeta（爱美剧下载）

**代码来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)**

```ini
[Script]

# Meeta（爱美剧下载）
http-response https?:\/\/mjappaz.yefu365.com\/index.php\/app\/ios\/ script-path=https://raw.githubusercontent.com/MeetaGit/MeetaRules/master/Surge/Scripting/aimeiju.js
```

主机名添加：`mjappaz.yefu365.com`

```ini
[MITM]

hostname = mjappaz.yefu365.com
```

## Meeta（微信读书）

**代码来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)**

```ini
[Script]

# Meeta（微信读书）
http-response https?:\/\/i\.weread\.qq.com\/pay\/memberCardSummary\?pf script-path=https://raw.githubusercontent.com/MeetaGit/MeetaRules/master/Surge/Scripting/wechatread.js
```

主机名添加：`i.weread.qq.com`

```ini
[MITM]

hostname = i.weread.qq.com
```

## Meeta（西瓜视频）

**代码来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)**

```ini
[Script]

# Meeta（西瓜视频）
http-response https?://api.gkaorlz.com/api/user/get script-path=https://raw.githubusercontent.com/MeetaGit/MeetaRules/master/Surge/Scripting/watermelonvideo.js
```

主机名添加：`api.gkaorlz.com`

```ini
[MITM]

hostname = api.gkaorlz.com
```

## Meeta（哔哩哔哩）

**代码来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)**

```ini
[Script]

# Meeta（哔哩哔哩）
http-response https?://app.bilibili.com/x/ script-path=https://raw.githubusercontent.com/MeetaGit/MeetaRules/master/Surge/Scripting/bili.js
```

主机名添加：`app.bilibili.com`

```ini
[MITM]

hostname = app.bilibili.com
```



> **壮壮不维护规则和脚本！！！**
>
> Surge 4.0.0 使用脚本时报错，请自行联系作者更新！！！

