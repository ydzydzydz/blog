---
layout: post
title: 适用于Surge4的Script
tags: Surge 
categories: Surge
password: zhuangzhuang
prompt: 请输入密码
alert: 密码错误
---

最近 Surge 的测试版已经更新到 4.0.0 版本了，曾经的 Script 功能又回来了，支持的种类也变多了，但是旧版的脚本基本上都是不能使用的，新开一篇文章写一下收集到的脚本，感谢各位制作脚本的大佬。

> **壮壮不维护规则和脚本！！！**

---

## 1 机场签到

**代码来源：[mieqq/mieqq](https://github.com/mieqq/mieqq)、[Neurogram](https://github.com/Neurogram-R)**

```ini
[Script]

# 将 checkin.js 放入到 iCloud云盘/Surge/resources/js 中
# "* * * * *" 表示每分钟运行
# "0 * * * *" 表示每小时 0 分运行
# "0 0 * * *" 表示每天 00:00 分运行
cron "0 * * * *" script-path=resources/js/checkin.js
```

```javascript
/**********************************************
* checkin.js 内容
* 由于脚本内包含登陆账号密码，须将脚本放置在本地，请勿随意分享
* 需要修改的信息有域名、邮箱、密码，域名必须直连可访问，否则可能会发生错误
* 此脚本不保证对所有脚本有效
**********************************************/

const table = {
    url: "https://www.cordcloud.fun/auth/login",   // 替换机场域名
    header: {
         "Content-Type": "application/json"
    },
    body: {
        "email": "mail@zhuangzhuang.ml",  // 替换登录邮箱
        "passwd": "12345678",             // 替换登陆密码
        "rumber-me": "week"
    }
}

$httpClient.post(table, function (error, response, data) {
    if (error) {
        console.log(error);
        $notification.post('签到', error, "");
        $done();
    } else {
        $httpClient.post("https://www.cordcloud.fun/user/checkin", function (error, response, data) { // 替换机场域名
            var checkinMsg = JSON.parse(data).msg
            $httpClient.get("https://www.cordcloud.fun/user", function (error, response, data) { // 替换机场域名
                var usedData = data.match(/(已用\s\d.+?%|>已用(里程|流量)|>\s已用流量)[^B]+/)
                if (usedData) {
                    usedData = usedData[0].match(/\d\S*(K|G|M|T)/)
                    var restData = data.match(/(剩余\s\d.+?%|>剩余(里程|流量)|>\s剩余流量)[^B]+/)
                    restData = restData[0].match(/\d\S*(K|G|M|T)/)
                    $notification.post('CordCloud', checkinMsg, "已用流量：" + usedData[0] + "B" + "\n剩余流量：" + restData[0] + "B");    // 不需要通知请将此行注释
                }
                $done();
            });
        });
    }
}
);

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


[MITM]

# 添加主机名：api.gkaorlz.com
hostname = api.gkaorlz.com
```





> 不行了，学校网太烂了，过两天回家再写吧。。。

