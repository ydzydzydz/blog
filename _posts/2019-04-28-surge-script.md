---
layout: post
title: Surge支持Javascript
tags: Surge 
categories: Surge
---

最近 Surge 又更新了，支持 Javascript 了，更强大了。

意味着 Surge 可以通过脚本执行更多的操作，更像是一个`网络调试`软件，而非`翻墙工具`了。

可以借助 Javascript 不仅仅只是去广告，但是去广告的效果会更好。

<!-- more -->

---

例如：

## 去微博应用内广告

```ini
[Script]

# 去微博应用内广告
http-response api.weibo.cn script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_rm_ad.js
```

主机名添加：`api.weibo.cn`

```ini
hostname = api.weibo.cn
```

Javascript 源文件 (**不在 Surge 中填写**)  代码来源：[yichahucha/surge](https://github.com/yichahucha/surge/blob/master/wb_rm_ad.js)

```javascript
let path2 = '/2/statuses/';//Feed流广告
let path3 = '/2/statuses/extend';//微博创作者广告共享计划、相关推荐
var result = body;
if (url.indexOf(path2) != -1) {
    var json_body = JSON.parse(body)
    if (url.indexOf(path3) != -1) { 
        delete json_body.trend
    }else {
        var ad = json_body.ad;
        if (typeof(ad) != "undefined") {
            var statuses = json_body.statuses;
            for (let i = 0; i < ad.length; i++) {
                const element = ad[i];
                let ad_id = element.id;
                for (let j = 0; j < statuses.length; j++) {
                    const element = statuses[j];
                    let statuses_id = element.id;
                    if (statuses_id == parseInt(ad_id)) {
                        statuses.splice(j,1);
                    }
                }
            }
        }
    }
    result = JSON.stringify(json_body);
}
result;
```

## 借助 Surge 防剧透

```ini
[Script]

# 防剧透
http-response .* script-path=https://gist.githubusercontent.com/Blankwonder/72fcdd46d1d9148f5461c6b59d859551/raw/12fd2c6b1be806596766f5fab825d1bd5f770cb2/anti-spoiler.js
```

Javascript 源文件 (**不在 Surge 中填写**)  代码来源：[Blankwonder](https://gist.github.com/Blankwonder/72fcdd46d1d9148f5461c6b59d859551)

```javascript
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function dec2hex(dec, padding){
  return parseInt(dec, 10).toString(16).padStart(padding, '0');
}

function utf8StringToUtf16String(str) {
  var utf16 = [];
  for (var i=0, strLen=str.length; i < strLen; i++) {
    utf16.push('\\\\u')
    utf16.push(dec2hex(str.charCodeAt(i), 4));
  }
  return utf16.join('');
}


var keywords = ['复联4', '复联', '复仇者联盟4', '复仇者联盟', '钢铁侠', '托尼', '美国队长', '美队', '黑寡妇', '寡姐', '蜘蛛侠', '浩克', '绿巨人', '鹰眼', '灭霸', '雷神', '惊奇队长', '惊奇', '蚁人', '银河护卫队', '银队'];

var result = body;

keywords.forEach(function(k) {
  result = replaceAll(result, k, '喵喵喵');
  result = replaceAll(result, utf8StringToUtf16String(k), "\u55b5\u55b5\u55b5");  
});

result;
```

---

下面是官方文档的介绍。emmm，居然是中文的。。。

> # Scripting
>
> (The document is in Chinese during beta testing)
>
> 从 Surge Mac 3.2.0 开始，可以使用 JavaScript 来对 response body 进行修改。配置如下
>
> ```
> [Script]
> http-response .* script-path=anti-spoiler.js
> ```
>
> 每一行配置分为三个部分，第一部分为脚本类型，目前仅支持 'http-response'； 第二部分为针对请求 URL 的正则表达式； 第三部分为参数表，使用半角逗号分隔，参数有：
>
> + script-path：JS 脚本的路径，可以是 URL、相对路径或绝对路径（仅限 macOS），必填。
> + script-update-interval：JS 脚本的更新间隔，仅当使用 URL 时生效，选填，默认值为 24 小时。
> + max-size：最大允许进行修改的 body 大小，单位为字节，选填，默认值为 524288 (512KB)。
>
> 由于进行 script 修改会需要 Surge 先将 response body 完全下载后再进行处理，如果遇到了较大的数据将导致内存占用量暴增，Surge iOS 受系统内存限制在该情况下极易被直接终止。
>
> 当返回的数据长度超过 max-size 设定值后，Surge 将放弃对该请求执行脚本并回退到 passthrough 模式。
>
> ## 编写脚本
>
> Surge 会向 JSVM 上下文传入以下全局变量：
>
> + body[String]: 原始 response body
> + status[Number]: HTTP 状态码
> + method[String]: HTTP 请求方法
> + url[String]: URL 地址
>
> Surge 将使用脚本的最后一行运行结果作为返回值，返回值约定如下：
>
> + String 类型: 将使用该结果作为新的 response body
> + Null: 终止该请求
> + undefined: 不对请求进行修改
>
> 一个简单的样例
>
> ```
> var obj = JSON.parse(body); // 对 response body 进行 JSON 解析得到 Object
> obj['surge'] = 'OK';  // 增加 'surge' 字段
> JSON.stringify(obj); // 进行 JSON 编码并作为结果返回
> ```
>
> 另一个样例，将全文查找所有的文字进行反剧透<https://gist.github.com/Blankwonder/72fcdd46d1d9148f5461c6b59d859551>
>
> ## 其他
>
> + 受 JavaScript 语言限制，目前仅支持对 UTF-8 编码的 response body 执行脚本，如果 response body 的二进制数据无法进行 UTF-8 解码，将跳过脚本直接返回。
> + 默认情况下，每次执行脚本时将使用一个干净的 JVM 上下文，如果需要可配置
>
> ```
> [General]
> shared-jvm-context=true
> ```
>
> 该模式下所有脚本将共享上下文，可以使用全局变量共享数据。
>
> + 可使用 console.log 将日志输出到 Surge 的日志中，方便调试。
> + Dashboard 中抓到的 response header 和 response body 为修改后的结果，在 Notes 中可看到脚本的执行情况。

---

**补充一点**

在 iOS 系统中本地 js时，`.js文件`无法像`.list文件`一样通过拷贝粘贴到 iCloud 云盘 Surge 文件夹中

解决方法：

* 通过 **MAC** 系统保存文件到相应路径
* 不使用`.js`作为文件后缀名，`.txt`、`.list`都可以，在 Surge 中引用时注意后缀名需一致

另外，若是 Surge 文件夹中的外部资源较多，可以在 Surge 文件夹中建立专用的文件夹，引用时注意路径即可。如：

```
└── iCloud云盘
    └── Surge
        ├── zhuangzhuang.conf
        ├── lhie1.conf
        ├── sconper.conf
        └── resources
            ├── policy
            │   ├── auto.list
            │   ├── all.list
            │   └── clash.list
            ├── ruleset
            │   ├── ad.list
            │   └── cn.list
            └── js
                ├── wb_rm_ad.js
                └── fang-ju-tou.js
```



