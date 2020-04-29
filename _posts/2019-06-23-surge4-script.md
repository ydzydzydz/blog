---
layout: post
title: 适用于Surge4的Script
tags: Surge 
categories: Surge
password: 自觉
prompt: 1.有作者反馈脚本被人售卖，请自觉一点，不然壮壮早发财了\n2.有部分脚本失效的可以在下方留言，提醒壮壮注释掉\n3.请输入密码：自觉
alert: 出发去百度
published: false
---

最近 Surge 的测试版已经更新到 4.0.0 版本了，曾经的 Script 功能又回来了，支持的种类也变多了，但是旧版的脚本基本上都是不能使用的，新开一篇文章写一下收集到的脚本，感谢各位制作脚本的大佬。

> **壮壮不维护规则和脚本！！！**
>
> 大部分脚本壮壮未测试，点击脚本来源查看原作者详细教程

<!-- more -->

* TOC
{:toc}
---

## 在线Cron表达式

**来源：[HAoDestiny/Cron-html](https://github.com/HAoDestiny/Cron-html)**

<iframe src="../../cron" width="100%" height="350px;" scrolling="auto" style="border:0px;    box-shadow: 0 0 3px 2px #00daf0; ">
</iframe>


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
http-request ^https://mp\.weixin\.qq\.com/mp/getappmsgad script-path=https://Choler.github.io/Surge/Script/WeChat.js

[MITM]
hostname = mp.weixin.qq.com
```

## ~~11 人人视频~~

**来源：[Choler/Surge](https://github.com/Choler/Surge)**

**作者：[Choler](https://github.com/Choler)**

```ini
[Rule]
URL-REGEX,^https?:\/\/api\.rr\.tv\/(ad|getLastest),REJECT
# 屏蔽更新提示
URL-REGEX,"^https?:\/\/api\.rr\.tv\/.*(getAll|Version)$",REJECT

[Script]
# 人人视频 （作者：Choler）
http-response ^https://api.rr.tv/.*(profile|Piece)$ requires-body=1,max-size=-1,script-path=https://Choler.github.io/Surge/Script/RRtv.js

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
http-response ^https?:\/\/(api|mapi)\.weibo\.(cn|com)\/2/(statuses\/(unread|extend|positives/get|friends(\/|_)timeline)|stories\/(video_stream|home_list)|groups\/timeline|fangle\/timeline|profile\/statuses|comments\/build_comments|photo\/recommend_list|service\/picfeed|searchall|cardlist) script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js,requires-body=true
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

## 31 百度贴吧签到

**来源：[IsSuperman/Surge-js](https://github.com/IsSuperman/Surge-js)**

**作者：[IsSuperman](https://github.com/IsSuperman)**

使用前，需要用到Surge或Thor等抓包工具，参照脚本原作者[教程](https://github.com/IsSuperman/Surge-js/blob/master/readme.md)

```ini
[Script]
# 百度贴吧签到 （作者：IsSuperman）(地址：https://raw.githubusercontent.com/IsSuperman/Surge-js/master/tieba.js)
cron "0 8 * * *" script-path=resources/js/tieba.js
```

## 32 快递追踪

**来源：[IsSuperman/Surge-js](https://github.com/IsSuperman/Surge-js)**

**作者：[IsSuperman](https://github.com/IsSuperman)**

使用前，需要在本地填写快递单号，参照脚本原作者[教程](https://github.com/IsSuperman/Surge-js/blob/master/readme.md)

```ini
[Script]
# 快递追踪 （作者：IsSuperman）(地址：https://raw.githubusercontent.com/IsSuperman/Surge-js/master/kuaidi.js)
cron "0 8 * * *" script-path=resources/js/kuaidi.js
```

## 33 115网盘离线下载

**来源：[ikanam/Surge-Scripts](https://github.com/ikanam/Surge-Scripts)**

**作者：[Kanam](https://github.com/ikanam)**

```ini
# 快速创建下载任务的快捷指令: https://www.icloud.com/shortcuts/31e3a877cec340a48192aa081e25c05e

[Script]
# 115网盘离线下载 （作者：Kaname）
http-response ^http:\/\/115\.com\/lx.*$ script-path=https://raw.githubusercontent.com/ikanam/Surge-Scripts/master/115lx.js, requires-body=true

[MITM]
hostname = *.115.com

[URL Rewrite]
# 将签到按钮重定向到离线下载页面
^http:\/\/115\.com\/\?ct=sign$ http://115.com/lx?taskdg=1 header
```

## 34 提取115中的视频使用nPlayer进行播放

**来源：[ikanam/Surge-Scripts](https://github.com/ikanam/Surge-Scripts)**

**作者：[Kanam](https://github.com/ikanam)**

```ini
[Script]
# 提取115中的视频使用nPlayer进行播放 （作者：Kaname）
http-request ^https?:\/\/.*\.115\.com\/.*\.m3u8.*$ script-path=https://raw.githubusercontent.com/ikanam/Surge-Scripts/master/115tonplayer.js
```

## 35 抖音

**来源：[Choler/Surge](https://github.com/Choler/Surge)**

**作者：[Choler](https://github.com/Choler)**

```ini
[Script]
# 抖音 （作者：Choler）
http-response ^https://aweme(-eagle)?.snssdk.com/aweme/v\d/(.*/)?(feed|post)/ requires-body=1,max-size=-1,script-path=https://Choler.github.io/Surge/Script/Aweme.js

[MITM]
hostname = aweme*.snssdk.com
```

## 36 皮皮虾去广告

**来源：[Choler/Surge](https://github.com/Choler/Surge)**

**作者：[Choler](https://github.com/Choler)**

```ini
[Script]
# 皮皮虾去广告 （作者：Choler）
http-response ^https?://[a-z]+.snssdk.com/bds/feed/stream/ requires-body=1,max-size=-1,script-path=https://Choler.github.io/Surge/Script/Super.js

[MITM]
hostname = ??.snssdk.com
```

## 37 南瓜电影

**来源：[Choler/Surge](https://github.com/Choler/Surge)**

**作者：[Choler](https://github.com/Choler)**

```ini
[Script]
# 南瓜电影 （作者：Choler）
http-response ^https://p.doras.api.vcinema.cn/v5.0/(user|splash|activity)/\w+(/)?$ requires-body=1,max-size=-1,script-path=https://Choler.github.io/Surge/Script/Vcinema.js

[MITM]
hostname = p.doras.api.vcinema.cn
```

## 38 缓解DNS污染

**来源：[Choler/Surge](https://github.com/Choler/Surge)**

**作者：[Choler](https://github.com/Choler)**

```ini
[Rule]
# 友情提示: 需要注意代理策略名对应
SCRIPT,falied,PROXY,requires-resolve

[Script]
# 缓解DNS污染 （作者：Choler）
rule falied script-path=https://Choler.github.io/Surge/Script/failed.js
```
## 39 解决Apple Store应用下载缓慢

**来源：[Choler/Surge](https://github.com/Choler/Surge)**

**作者：[Choler](https://github.com/Choler)**

```ini
[Host]
iosapps.itunes.apple.com = script:stored

[Script]
# 解决Apple Store应用下载缓慢 （作者：Choler）
dns stored script-path=https://Choler.github.io/Surge/Script/stored.js
```

## 40 网飞获取IMDb分数

**来源：[ikanam/Surge-Scripts](https://github.com/ikanam/Surge-Scripts)**

**作者：[Kanam](https://github.com/ikanam)**

```ini
[Script]
# 网飞获取IMDb分数 （作者：Kaname）
http-request https:\/\/ios\.prod\.ftl\.netflix\.com\/iosui\/user\/.*path=%5B%22videos%22%2C%[0-9]+%22%2C%22summary%22%5D&pathFormat.* script-path=https://raw.githubusercontent.com/ikanam/Surge-Scripts/master/netflixratings.js
http-response https:\/\/ios\.prod\.ftl\.netflix\.com\/iosui\/user\/.*path=%5B%22videos%22%2C%[0-9]+%22%2C%22summary%22%5D&pathFormat.* requires-body=1, script-path=https://raw.githubusercontent.com/ikanam/Surge-Scripts/master/netflixratings.js

[MITM]
hostname = ios.prod.ftl.netflix.com
```


## 41 网易蜗牛读书

**来源：[yxiaocai/quanx](https://github.com/yxiaocai/quanx)、[JO2EY/Rules](https://github.com/JO2EY/Rules)**

**作者：佚名**

**修改：[yxiaocai](https://github.com/yxiaocai)、[旺仔](https://github.com/JO2EY)**

```ini
[Script]
# 网易蜗牛读书 （作者：yxiaocai、旺仔）
# iOS13 上使用，Surge 可能会爆炸！！！请自行尝试 （BOOM
http-response ^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json script-path=https://raw.githubusercontent.com/JO2EY/Rules/master/Script/snailread.js,requires-body=true

[MITM]
hostname = p.du.163.com

[URL Rewrite]
^https?:\/\/p\.du\.163\.com\/readtime\/info\.json - reject
```


## 42 微信读书

**来源：[yxiaocai/quanx](https://github.com/yxiaocai/quanx)**

**作者：[yxiaocai](https://github.com/yxiaocai)**

```ini
[Script]
# 微信读书 （作者：yxiaocai）
http-response ^https?:\/\/i.weread.qq.com\/pay script-path=https://raw.githubusercontent.com/yxiaocai/quanx/master/js/iweread.js,requires-body=true

[MITM]
hostname = i.weread.qq.com
```

## 43 每日壹句（有道词典）+ 每日打卡提醒

**来源：[yichahucha/surge](https://github.com/yichahucha/surge)**

**作者：[yichahucha](https://github.com/yichahucha)**

```ini
[Script]
# 每日壹句（有道词典）+ 每日打卡提醒 （作者：yichahucha）
cron "0 9,18 * * 1-5" script-path=https://raw.githubusercontent.com/yichahucha/surge/master/cron_daily.js
```

## 44 网易漫画VIP

**来源：[NobyDa/Script](https://github.com/NobyDa/Script)**

**作者：[野比](https://github.com/NobyDa)**

```ini
[Script]
# 网易漫画VIP 解锁VIP漫画 以及付费漫画 （作者：野比）
http-response https?:\/\/api-163\.biliapi\.net\/(getUserProfile|source\/detail) script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/wymh163.js,requires-body=true

[MITM]
hostname = api-163.biliapi.net
```

## 45 幸运飞艇-`私人定制，请勿滥用`

**来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)**

**作者：[Meeta](https://github.com/MeetaGit)**

**赞助：[zaxbaby](htttps://t.me/zaxbaby)**

> **该 api 由  [zaxbaby](htttps://t.me/zaxbaby)  私人购买，免费分享，所以请大家不要滥用**
>
> **未经允许不允许以此谋利**

```ini
[Script]
# 幸运飞艇 （作者：Meeta）（赞助：zaxbaby）
cron "0 0/5 13-23 * * *" script-path=https://meetagit.github.io/MeetaRules/Surge/Custom_Js/lottery_xyft.js
```


## 46 香蕉视频

**来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)**

**作者：[Meeta](https://github.com/MeetaGit)**

```ini
[Script]
# 香蕉视频 （作者：Meeta）
http-response https?:\/\/ios\.fuliapps\.com\/ script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/bananavideo.js,requires-body=true

[MITM]
hostname = ios.fuliapps.com
```


## 47 节假日、农历提醒

**来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)**

**作者：[Meeta](https://github.com/MeetaGit)**

```ini
[Script]
# 节假日、农历提醒 （作者：Meeta）
cron "0 0 8,18 * * *" script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/Calendar.js
```

## 48 哔哩哔哩番剧默认开启1080P+

**来源：[NobyDa/Script](https://github.com/NobyDa/Script)**

**作者：[野比](https://github.com/NobyDa)**

```ini
[Script]
# 哔哩哔哩番剧默认开启1080P+ （作者：野比）
# 如番剧清晰度无1080P+ 请不要开启此脚本
http-response https?:\/\/api\.bilibili\.com\/pgc\/player\/api\/playurl script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/bilifj.js,requires-body=true

[MITM]
hostname = api.bilibili.com
```

## 49 VSCO滤镜解锁

**来源：[NobyDa/Script](https://github.com/NobyDa/Script)**

**作者：[野比](https://github.com/NobyDa)**

```ini
# 方法一：使用重定向功能实现
[URL Rewrite]
# VSCO滤镜解锁 （作者：野比）
^https?:\/\/vsco\.co\/api\/subscriptions\/2.1\/user-subscriptions\/\d{1,} https://raw.githubusercontent.com/NobyDa/Script/Pv/QuantumultX/File/1546 302

[MITM]
hostname = vsco.co

#################################################################################################################################################################################################################

# 方法二：使用脚本功能实现
[Script]
# VSCO滤镜解锁 （作者：野比）
http-response https?:\/\/vsco\.co\/api\/subscriptions\/2.1\/ script-path=https://raw.githubusercontent.com/NobyDa/Script/Pv/QuantumultX/File/vs2.js,requires-body=true

[MITM]
hostname = vsco.co
```

## 50 大片-视频编辑器 VIP解锁

**来源：[NobyDa/Script](https://github.com/NobyDa/Script)**

**作者：[野比](https://github.com/NobyDa)**

```ini
[Script]
# 大片-视频编辑器 VIP解锁 （作者：野比）
http-response https?:\/\/api\.vnision\.com\/v1\/(users\/|banners) script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/dapian.js,requires-body=true

[MITM]
hostname = api.vnision.com
```

## 51 云盘解析

**来源：[MeetaGit/MeetaRules](https://github.com/MeetaGit/MeetaRules)**

**作者：[Meeta](https://github.com/MeetaGit)**

```ini
[Script]
# 云盘解析 （作者：Meeta）
# 云盘解析脚本使用了度盘网页版解析,目前仅部分云盘分享链接可自动填写提取码，未来计划加入云盘万能钥匙
http-request https?:\/\/pan\.baidu\.com\/s\/ script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/yun_analyze.js,requires-body=1

[MITM]
hostname = pan.baidu.com
```

## 52 布丁漫畫 VIP解锁 VIP解锁

**来源：[NobyDa/Script](https://github.com/NobyDa/Script)**

**作者：[野比](https://github.com/NobyDa)**

```ini
[Script]
# 布丁漫畫 VIP解锁 VIP解锁 （作者：野比）
http-response ^https?:\/\/(bd|bdapp)\.4008109966\.net\/\/index\.php\/api\/User\/userLogin requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/bdmh.js,script-update-interval=0

[MITM]
hostname = bd.4008109966.net
```

## 53 网易考拉去广告

**来源：[Choler/Surge](https://github.com/Choler/Surge)**

**作者：[Choler](https://github.com/Choler)**

```ini
[Script]
# 网易考拉去广告 （作者：Choler）
http-response ^https://sp\.kaola\.com/api/openad$ requires-body=1,max-size=-1,script-path=https://Choler.github.io/Surge/Script/Kaola.js

[MITM]
hostname = sp.kaola.com
```

## 54 腾讯新闻去广告

**来源：[Choler/Surge](https://github.com/Choler/Surge)**

**作者：[Choler](https://github.com/Choler)**

```ini
[Script]
# 腾讯新闻去广告 （作者：Choler）
http-response https://r\.inews\.qq.com\/get(QQNewsUnreadList|RecommendList) requires-body=1,max-size=-1,script-path=https://Choler.github.io/Surge/Script/QQNews.js

[MITM]
hostname = r.inews.qq.com
```

## 55 今日头条去广告

**来源：[Choler/Surge](https://github.com/Choler/Surge)**

**作者：[Choler](https://github.com/Choler)**

```ini
[Script]
# 今日头条去广告 （作者：Choler）
http-response ^https://[a-zA-Z]*\.snssdk\.com/api/news/feed/v88/ requires-body=1,max-size=-1,script-path=https://Choler.github.io/Surge/Script/Toutiao.js

[MITM]
hostname = *.snssdk.com
```

## 56 去除哔哩哔哩热门评论上面的小喇叭

**来源：作者已经删库了 **

**作者：[Primovist](https://github.com/Primovist)**

```ini
[Script]
# 去除哔哩哔哩热门评论上面的小喇叭 （作者：Primovist）
http-response https://api.bilibili.com/x/v2/reply/main\?access_key requires-body=1,script-path=https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/script/bilibili-reply.js

[MITM]
hostname = api.bilibili.com
```

## 57 去除哔哩哔哩推广活动

**来源：作者已经删库了**

**原作者：[onewayticket255](https://github.com/onewayticket255)**

**修改：[Primovist](https://github.com/Primovist)**

```ini
[Script]
# 去除哔哩哔哩推广活动 （原作者：onewayticket255 修改：Primovist）
http-response https://api.bilibili.com/x/v2/reply/main\?access_key requires-body=1,script-path=https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/script/bilibili-viewrelate.js

[MITM]
hostname = api.bilibili.com
```

## 58 新香蕉视频	

**来源：[NobyDa/Script](https://github.com/NobyDa/Script)**

**作者：[野比](https://github.com/NobyDa)**

```ini
[Script]
# 新香蕉视频 （作者：野比）
http-response ^https?:\/\/apple\.fuliapps\.com requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/xjsp.js

[MITM]
hostname = apple.fuliapps.com
```

## 59 哔哩哔哩（N合一版）

**来源：作者已经删库了**

**原作者：[onewayticket255](https://github.com/onewayticket255)**

**修改：[Primovist](https://github.com/Primovist)**

```ini
[Script]
# 哔哩哔哩（N合一版）（原作者：onewayticket255 修改：Primovist）
http-response ^https?:\/\/ap(i|p).bilibili.com\/x\/(resource\/show\/tab|v2\/(reply\/main|view\/material|account\/mine|view|feed\/index))\?access_key requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/script/bilibili.js

[MITM]
hostname = api.bilibili.com
```

## 60 知乎去广告

**来源：作者已经删库了**

**修改：[Primovist](https://github.com/Primovist)**

```ini
[Rule]
# RULESET,https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/custom/myreject.list,REJECT
URL-REGEX,https://(api|www).zhihu.com/(fringe|zst|commercial|real_time|ad-style-service|banners|topstory/hot-lists|market/popover|mqtt|.*(launch|featured-comment-ad|recommendations|community-ad)|search/(top|tab|preset)|ab),REJECT
AND,((USER-AGENT,ZhihuHybrid*), (NOT,((DOMAIN-SUFFIX,zhihu.com))), (NOT,((DOMAIN-SUFFIX,zhimg.com)))),REJECT
AND,((USER-AGENT,osee2*), (NOT,((DOMAIN-SUFFIX,zhihu.com))), (NOT,((DOMAIN-SUFFIX,zhimg.com)))),REJECT

[Script]
# 知乎去广告（修改：Primovist）
http-response ^https?:\/\/api\.zhihu\.com\/(moments\?|topstory\/recommend|.*\/questions|market\/header) requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/script/zhihu.js

[MITM]
hostname = api.zhihu.com
```

## 61 用药助手 解锁专业版

**来源：作者已经删库了**

**作者：[Primovist](https://github.com/Primovist)**

```ini
[Script]
# 用药助手 解锁专业版（作者：Primovist）
http-response ^https?:\/\/(i|newdrugs)\.dxy\.cn\/(snsapi\/username\/|app\/user\/(pro\/stat\?|init\?timestamp=)) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/yyzs.js

[MITM]
hostname = newdrugs.dxy.cn
```
## 62 小米粒直播, 优乐美直播, 彩色直播

**来源：[NobyDa/Script](https://github.com/NobyDa/Script)**

**作者：[野比](https://github.com/NobyDa)**

**地址：[小米粒](https://ewt.xyz/assets/bu39.html) 、[优乐美](https://ezj.xyz/assets/g62a.html) 、[彩色](https://33188f.com/) **

```ini
[Script]
# 小米粒直播, 优乐美直播, 彩色直播（作者：野比）
http-response ^https?:\/\/(.+)\.(cc|com)(:?\d*)\/(api\/public\/\?service=Live\.checkLive$|public\/\/\?service=Live\.roomCharge$|lg\/video\/loadVideoFees\.do$) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/zhibo.js

[MITM]
hostname = app101.avictown.cc
```


> 最近可能没什么时间搬脚本了，有需要的朋友可以订阅[野比大佬的频道](https://t.me/NobyDa)和 [Meeta 大佬的频道](https://t.me/meetashare)，或者加入 [Meeta 大佬的 Telegram 群组](https://t.me/Meeta_qun)
>
> **ZHUANGZHUANG 博客上可能就不再搬运了**

