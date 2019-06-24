---
layout: post
title: 适用于Surge4的Script
tags: Surge 
categories: Surge
---

最近 Surge 的测试版已经更新到 4.0.0 版本了，曾经的 Script 功能又回来了，支持的种类也变多了，但是旧版的脚本基本上都是不能使用的，新开一篇文章写一下收集到的脚本，感谢各位制作脚本的大佬。

> **壮壮不维护规则和脚本！！！**

<!-- more -->

---

## 1 机场签到

**代码来源：[mieqq/mieqq](https://github.com/mieqq/mieqq)、[Neurogram](https://github.com/Neurogram-R)**

```ini
[Script]

# 壮壮修改版： https://raw.githubusercontent.com/ydzydzydz/Rules/master/js/checkin.js
# 将 checkin.js 放入到 iCloud云盘/Surge/resources/js 中，自行修改站点信息
# "* * * * *" 表示每分钟触发、"0 * * * *" 表示每小时 0 分触发、"0 0 * * *" 表示每天 00:00 触发
cron "0 0 * * *" script-path=resources/js/checkin.js
```



## 2 酷我音乐SVIP

**代码来源：[meetagit/MeetaRules](https://github.com/meetagit/MeetaRules)**

**作者频道：[「Meeta」share](https://t.me/meetashare)**

```ini
[Script]

# 酷我音乐SVIP
http-response https?:\/\/.*\.kuwo\.cn script-path=https://raw.githubusercontent.com/MeetaGit/MeetaRules/master/Surge/Scripting/kuwovip.js,requires-body=true
```



## 3 网易漫画

**代码来源：[meetagit/MeetaRules](https://github.com/meetagit/MeetaRules)**

**作者频道：[「Meeta」share](https://t.me/meetashare)**

```ini
[Script]

# 网易漫画
http-response https?:\/\/api-163\.biliapi\.net\/getUserProfile script-path=https://raw.githubusercontent.com/MeetaGit/MeetaRules/master/Surge/Scripting/wymh.js,requires-body=true
```

```ini
[MITM]

# 添加主机名：api-163.biliapi.net
hostname = api-163.biliapi.net
```



## 4 西瓜视频

**代码来源：[meetagit/MeetaRules](https://github.com/meetagit/MeetaRules)**

**作者频道：[「Meeta」share](https://t.me/meetashare)**

```ini
[Script]

# 西瓜视频
http-response https?://api.gkaorlz.com/api/user/get script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/watermelonvideo.js,requires-body=true
```

```ini
[MITM]

# 添加主机名：api.gkaorlz.com
hostname = api.gkaorlz.com
```



## 5 每时天气

**代码来源：[meetagit/MeetaRules](https://github.com/meetagit/MeetaRules)**

**作者频道：[「Meeta」share](https://t.me/meetashare)**

这个天气 api 定位不是很准，一天就帮壮壮换了三个地方，秦皇岛、石家庄、沧州，然而都不对，玩玩就好。

```ini
[Script]

# 整点报天气
cron "0 * * * *" script-path=https://meetagit.github.io/MeetaRules/Surge/Scripting/hourlyWeather.js

# 每天 8:00-20:00 整点预报天气 （壮壮修改版）
cron "0 8-20 * * *" script-path=https://raw.githubusercontent.com/ydzydzydz/Rules/master/js/weather.js
```



## 6 去微博广告

**代码来源：[yichahucha/surge](https://github.com/yichahucha/surge/)**

```ini
[Script]

# 去微博广告
http-response ^https?:\/\/(api|mapi)\.weibo\.(cn|com)\/2(\/groups\/timeline|\/statuses\/unread|\/statuses\/extend|\/comments\/build_comments|\/photo\/recommend_list|\/stories\/video_stream|\/statuses\/positives\/get|\/stories\/home_list|\/profile\/statuses|\/statuses\/friends\/timeline|\/service\/picfeed) script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js,requires-body=true
http-response ^https?:\/\/(sdk|wb)app\.uve\.weibo\.com(\/interface\/sdk\/sdkad.php|\/wbapplua\/wbpullad.lua) script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js,requires-body=true
```

```ini
[MITM]

# 添加主机名：api.weibo.cn、mapi.weibo.com、*.uve.weibo.com
hostname = api.weibo.cn, mapi.weibo.com, *.uve.weibo.com
```



## 7 去知乎广告



> 不行了，学校网太烂了，过两天回家再写吧。。。

