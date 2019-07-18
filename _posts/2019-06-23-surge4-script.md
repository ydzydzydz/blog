---
layout: post
title: 适用于Surge4的Script
tags: Surge 
categories: Surge
password: 旺仔是猪
prompt: 请输入密码
alert: 密码是：旺仔是猪
---

最近 Surge 的测试版已经更新到 4.0.0 版本了，曾经的 Script 功能又回来了，支持的种类也变多了，但是旧版的脚本基本上都是不能使用的，新开一篇文章写一下收集到的脚本，感谢各位制作脚本的大佬。

> **壮壮不维护规则和脚本！！！**
>
> 大部分脚本壮壮未测试，点击脚本来源查看原作者详细教程

<!-- more -->

---

## 1 机场签到

**来源：[Neurogram-R/Surge](https://github.com/Neurogram-R/Surge)**

**作者：[Neurogram](https://github.com/Neurogram-R)、[pysta](https://github.com/mieqq)**

```ini
[Script]
# 在每天 00:00:00 执行签到脚本（作者：pysta、Neurogram）(地址：https://raw.githubusercontent.com/Neurogram-R/Surge/master/checkin.js)
cron "0 0 * * *" script-path=resources/js/checkin.js
```

## 2 每时天气

**来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)**

**作者：[Meeta](https://github.com/MeetaGit)**

```ini
[Script]
# 在每天 8:00-20:00 整点预报天气 （作者：Meeta、ZHUANGZHUANG）
cron "0 8-20 * * *" script-path=https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/script/weather.js
```

## 3 世界时间

**来源：[congcong0806/surge-list](https://github.com/congcong0806/surge-list)**

**作者：[congcong](https://github.com/congcong0806)**

```ini
[Script]
# 世界时间 （作者：congcong）
cron "0 7-23 * * *" script-path=https://github.com/congcong0806/surge-list/raw/master/Script/time.js
```

## 4 每时天气，和风天气api

**来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)**

**作者：[Meeta](https://github.com/MeetaGit)**

```ini
[Script]
# 每时天气，和风天气api （作者：Meeta）
cron "0 0 8-20/1 * * *" script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/meweather.js
```

## 5 酷我音乐SVIP

**来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)**

**作者：[Meeta](https://github.com/MeetaGit)**

```ini
[Script]
# 酷我音乐SVIP （作者：Meeta）
http-response https?:\/\/.*\.kuwo\.cn script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/kuwovip.js,requires-body=true
```

## 6 网易漫画

**来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)**

**作者：[Meeta](https://github.com/MeetaGit)**

```ini
[Script]
# 网易漫画 （作者：Meeta）
http-response https?:\/\/api-163\.biliapi\.net\/getUserProfile script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/wymh.js,requires-body=true

[MITM]
hostname = api-163.biliapi.net
```

## 7 西瓜视频

**来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)**

**作者：[Meeta](https://github.com/MeetaGit)**

```ini
[Script]
# 西瓜视频 （作者：Meeta）
http-response https?://api.gkaorlz.com/api/user/get script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/watermelonvideo.js,requires-body=true
http-response https?:\/\/api2\.gkaorlz\.com\:8080\/api\/user\/ script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/watermelonvideo.js,requires-body=true

[MITM]
hostname = api.gkaorlz.com, api2.gkaorlz.com
```

## 8 爱美剧 

**来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)**

**作者：[Meeta](https://github.com/MeetaGit)**

```ini
[Script]
# 爱美剧 （作者：Meeta）
http-response https?://mjappaz.yefu365.com/index.php/app/ios/ script-path= https://meetagit.github.io/MeetaRules/Surge/Scripting/aimeiju.js,requires-body=true

[MITM]
hostname = mjappaz.yefu365.com
```

## 9 快递追踪

**来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)**

**作者：[Meeta](https://github.com/MeetaGit)**

```ini
[Script]
# 快递追踪 （作者：Meeta）(地址：https://meetagit.github.io/MeetaRules/Surge/Scripting/mkdzz.js)
cron "* * * *" script-path=resources/js/mkdzz.js
```
## 10 微信公众号去广告

**来源：[Choler/Surge](https://github.com/Choler/Surge)**

**作者：[Choler](https://github.com/Choler)**

```ini
[Script]
# 微信公众号去广告 （作者：Choler）
http-response ^https:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad script-path=https://Choler.github.io/Surge/Script/WeChat.js,requires-body=true

[MITM]
hostname = mp.weixin.qq.com
```

## 11 人人视频

**来源：[Choler/Surge](https://github.com/Choler/Surge)**

**作者：[Choler](https://github.com/Choler)**

```ini
[Script]
# 人人视频 （作者：Choler）
http-response ^https:\/\/api\.rr\.tv\/.*(profile|Medal) script-path=https://Choler.github.io/Surge/Script/RRtv.js,requires-body=true
http-response ^https:\/\/api\.rr\.tv\/.*(channel|Choice|Feed) script-path=https://Choler.github.io/Surge/Script/RRtv-ad.js,requires-body=true,max-size=524288

[MITM]
hostname = api.rr.tv
```
## 12 抖音、Tiktok去水印

**来源：[Choler/Surge](https://github.com/Choler/Surge)**

**作者：[Choler](https://github.com/Choler)**

```ini
[Script]
# 抖音、Tiktok去水印 （作者：Choler）
http-request ^https:\/\/[\s\S]*/aweme\/v1\/play\/\?video script-path=https://Choler.github.io/Surge/Script/Amark.js

[MITM]
hostname = api.amemv.com, api*.musical.ly, api*.tiktokv.com
```
## 13 火山去水印

**来源：[Choler/Surge](https://github.com/Choler/Surge)**

**作者：[Choler](https://github.com/Choler)**

```ini
[Script]
# 火山去水印 （作者：Choler）
http-request ^https:\/\/api\.huoshan\.com\/hotsoon\/item\/video\/_source\/\?video script-path=https://Choler.github.io/Surge/Script/Amark.js

[MITM]
hostname = api.huoshan.com
```
## 14 微视去水印

**来源：[Choler/Surge](https://github.com/Choler/Surge)**

**作者：[Choler](https://github.com/Choler)**

```ini
[Script]
# 微视去水印 （作者：Choler）
http-request ^http:\/\/v\.weishi\.qq\.com/\w+\.f7\d{2}\.mp4 script-path=https://Choler.github.io/Surge/Script/Amark.js
```
## 15 抖音短视频

**来源：[Choler/Surge](https://github.com/Choler/Surge)**

**作者：[Choler](https://github.com/Choler)**

```ini
[Script]
# 抖音短视频 （作者：Choler）
http-response ^https:\/\/[\s\S]*\/v1\/(aweme\/)?(feed|post)\/ script-path=https://Choler.github.io/Surge/Script/Aweme.js,requires-body=true,max-size=524288

[MITM]
hostname = aweme*.snssdk.com
```
## 16 看漫画极速版

**来源：[imxh/js](https://github.com/imxh/js)**

**作者：[HoGer](https://github.com/imxh)**

```ini
[Script]
# 看漫画极速版 （作者：HoGer）
http-response https?:\/\/getuserinfo\.321mh\.com\/app_api\/v5\/getuserinfo\/ script-path=https://raw.githubusercontent.com/imxh/js/master/kanmanhuajisuban.js,requires-body=true

[MITM]
hostname = getuserinfo.321mh.com
```
## 17 微信阅读

**来源：[imxh/js](https://github.com/imxh/js)**

**作者：[HoGer](https://github.com/imxh)**

```ini
[Script]
# 微信阅读 （作者：HoGer）
http-response https?:\/\/i\.weread\.qq\.com\/pay\/memberCardSummary script-path=https://raw.githubusercontent.com/imxh/js/master/weixinyuedu.js,requires-body=true

[MITM]
hostname = i.weread.qq.com
```
## 18 微博去广告

**来源：[yichahucha/surge](https://github.com/yichahucha/surge)**

**作者：[yichahucha](https://github.com/yichahucha)**

```ini
[Script]
# 微博去广告 （作者：yichahucha）
http-response ^https?:\/\/(api|mapi)\.weibo\.(cn|com)\/2(\/groups\/timeline|\/statuses\/unread|\/statuses\/extend|\/comments\/build_comments|\/photo\/recommend_list|\/stories\/video_stream|\/statuses\/positives\/get|\/stories\/home_list|\/profile\/statuses|\/statuses\/friends\/timeline|\/service\/picfeed) script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js,requires-body=true
http-response ^https?:\/\/(sdk|wb)app\.uve\.weibo\.com(\/interface\/sdk\/sdkad.php|\/wbapplua\/wbpullad.lua) script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js,requires-body=true

[MITM]
hostname = api.weibo.cn, mapi.weibo.com, *.uve.weibo.com
```
## 19 毒去广告

**来源：[ConnersHua/Profiles](https://github.com/ConnersHua/Profiles)**

**作者：[ConnersHua](https://github.com/ConnersHua)**

```ini
[Script]
# 毒去广告 （作者：ConnersHua）
http-response ^https?:\/\/m\.poizon\.com\/client\/init script-path=https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge/Script/com.poizon.js

[MITM]
hostname = m.poizon.com
```
## 20 知乎去广告

**来源：[onewayticket255/Surge-Script](https://github.com/onewayticket255/Surge-Script)**

**作者：[onewayticket255](https://github.com/onewayticket255)**

```ini
[Script]
# 知乎去广告 （作者：onewayticket255）
http-response https://api.zhihu.com/topstory/follow requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20feed.js
http-response https://api.zhihu.com/topstory/recommend requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20recommend.js
http-response https://api.zhihu.com/.*/questions requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20answer.js
http-response https://api.zhihu.com/market/header requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20market.js

[MITM]
hostname = api.zhihu.com
```
## 21 哔哩哔哩去广告

**来源：[onewayticket255/Surge-Script](https://github.com/onewayticket255/Surge-Script)**

**作者：[onewayticket255](https://github.com/onewayticket255)**

```ini
[Script]
# 哔哩哔哩去广告 （作者：onewayticket255）
http-response https://app.bilibili.com/x/resource/show/tab requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20tab.js
http-response https://app.bilibili.com/x/v2/feed requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20feed.js
http-response https://app.bilibili.com/x/v2/account/mine requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20account.js
http-response https://app.bilibili.com/x/v2/view\?access_key requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20view%20relate.js
http-response https://app.bilibili.com/x/v2/rank requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20rank.js

[MITM]
hostname = app.bilibili.com, api.bilibili.com
```

## 22 知音漫客

**来源：[mieqq/mieqq](https://github.com/mieqq/mieqq)**

**作者：[pysta](https://github.com/mieqq)**

```ini
[Script]
# 知音漫客 （作者：pysta）
http-response getuserinfo-globalapi.zymk.cn/app_api/v5/(getuserinfo|coin_account|getuserinfo_ticket)/ script-path=https://raw.githubusercontent.com/mieqq/mieqq/master/zymk.js,requires-body = true

[MITM]
hostname = getuserinfo-globalapi.zymk.cn
```

## 23 人人影视字幕组

**来源：**Telegram 群组

**作者：**佚名

```ini
[Script]
# 人人影视字幕组，应用有广告缓存,可能需要重装 （作者：Kaya）
http-response http://ctrl.playcvn.com/app/(init|ads) script-path=https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/script/YYeTs.js,requires-body=true

[MITM]
hostname = ctrl.playcvn.com
```

## 24 监控App价格变化

**来源：[Neurogram-R/Surge](https://github.com/Neurogram-R/Surge)**

**作者：[Neurogram](https://github.com/Neurogram-R)**

```ini
[Script]
# 监控App价格变化 （作者：Neurogram）(地址：https://raw.githubusercontent.com/Neurogram-R/Surge/master/AppPricer.js)
cron "0 * * * *" script-path=resources/js/AppPricer.js
```

## 25 人人视频去广告+原画(勋章列表)

**来源：[popeyelau/Surge](https://github.com/popeyelau/Surge)**

**作者：[popeyelau](https://github.com/popeyelau)**

```ini
[Script]
# 人人视频去广告+原画(勋章列表) （作者：popeyelau）
http-response ^https:\/\/api\.rr\.tv(\/user\/profile|\/ad\/getAll) script-path=https://raw.githubusercontent.com/popeyelau/Surge/master/rrtv.js

[MITM]
hostname = api.rr.tv
```

## 26 彩票开奖助手

**来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)**

**作者：[Meeta](https://github.com/MeetaGit)**

```ini
[Script]
# 彩票开奖助手 （作者：Meeta）
cron "0 22 * * *" script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/mlottery.js
```

## 27 南瓜电影

**来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)**

**作者：[Meeta](https://github.com/MeetaGit)**

```ini
[Script]
# 南瓜电影 （作者：Meeta）
http-response https?:\/\/p\.doras\.api\.vcinema\.cn\/v5.0\/user/  script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/cushawmovie.js,requires-body=true

[MITM]
hostname = *.api.vcinema.cn
```

## 28 小小影视

**来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)**

**作者：[Meeta](https://github.com/MeetaGit)**

```ini
[Script]
# 小小影视 （作者：Meeta）
http-response https?:\/\/ios\.xiaoxiaoapps\.com\/ script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/smallvideo.js,requires-body=true

[MITM]
hostname = ios.xiaoxiaoapps.com
```

## 29 起点APP去启动广告

**来源：[LarkinZero/Surge](https://github.com/LarkinZero/Surge)**

**作者：[LarkinZero](https://github.com/LarkinZero)**

```ini
[Script]
# 起点APP去启动广告 （作者：LarkinZero）
http-response https:\/\/mage\.if\.qidian\.com\/argus\/api\/v3\/client\/getsplashscreen\?localLabels=100 script-path=https://raw.githubusercontent.com/LarkinZero/Surge/master/qidian_anti_ad.js,requires-body=true

[MITM]
hostname = *.qidian.com
```

## 30 A岛去帖内广告

**来源：[LarkinZero/Surge](https://github.com/LarkinZero/Surge)**

**作者：[LarkinZero](https://github.com/LarkinZero)**

```ini
[Script]
# A岛去帖内广告 （作者：LarkinZero）
http-response https:\/\/nmb\.fastmirror\.org\/Api\/thread.* requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/LarkinZero/Surge/master/nmb_no_ad.js,script-update-interval=0

[MITM]
hostname = nmb.fastmirror.org
```

