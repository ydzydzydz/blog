---
layout: post
title: Surge通过SOCKS5代理Telegram
tags: Surge Telegram socks5
categories: Surge
---

**代理设置**

> Surge iOS

1.出站模式选择规则模式或全局代理即可

2.设置SOCKS5代理（据说刷图会快一些）

* 打开Telegram

* 设置—>数据和存储—>代理—>使用代理—>SOCKS5

* 连接信息：服务器`127.0.0.1`(或`0.0.0.0`)，端口`6153`

<!-- more -->

<div align="center"><img src="https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/socks5/tg.png" width="50%"  /></div>

[点击设置](https://t.me/socks?server=127.0.0.1&port=6153)

> Surge Mac

1.开启增强模式

2.设置SOCKS5代理

* 打开Surge for Mac：设置—>通用—>代理服务—>允许远程访问—>`高级代理服务设置`，查看SOCKS5监听端口(默认为`6153`)

![socks5](https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/socks5/socks5.png)


* 打开Telegram,设置SOCKS5代理：服务器`127.0.0.1`(或`0.0.0.0`)，端口`6153`(如果有自定义端口，填写为上步查看到的端口)

[6153端口](https://t.me/socks?server=127.0.0.1&port=6153)

[8889端口](https://t.me/socks?server=127.0.0.1&port=8889)

---

**代理规则**

> Surge 3 Mac (Surge 3.4 for iOS)

```
[Rule]
# Telegram
RULE-SET,https://raw.githubusercontent.com/ydzydzydz/Rules/master/special/telegram.list，PROXY
```

> Surge 2 Mac (Surge 3/2 for iOS)

```
[Rule]
# Telegram
IP-CIDR,67.198.55.0/24,PROXY,no-resolve
IP-CIDR,91.108.4.0/22,PROXY,no-resolve
IP-CIDR,91.108.8.0/22,PROXY,no-resolve
IP-CIDR,91.108.12.0/22,PROXY,no-resolve
IP-CIDR,91.108.16.0/22,PROXY,no-resolve
IP-CIDR,91.108.56.0/22,PROXY,no-resolve
IP-CIDR,109.239.140.0/24,PROXY,no-resolve
IP-CIDR,149.154.160.0/20,PROXY,no-resolve
IP-CIDR,149.154.164.0/22,PROXY,no-resolve
IP-CIDR,149.154.168.0/22,PROXY,no-resolve
IP-CIDR,149.154.172.0/22,PROXY,no-resolve
IP-CIDR,205.172.60.0/22,PROXY,no-resolve
```

<div id="outerdiv" style="position:fixed;top:0;left:0;background:rgba(0,0,0,0.7);z-index:2;width:100%;height:100%;display:none;">
    <div id="innerdiv" style="position:absolute;">
        <img id="bigimg" style="border:5px solid #fff;" src="" />
    </div>
</div>
 <script src="https://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
<script type="text/javascript">
   $("body").on('click','img',function(){  
       var _this = $(this);//将当前的img元素作为_this传入函数  
       imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);  
   });
   function imgShow(outerdiv, innerdiv, bigimg, _this){  
       var src = _this.attr("src");//获取当前点击的pimg元素中的src属性  
       $(bigimg).attr("src", src);//设置#bigimg元素的src属性  
           /*获取当前点击图片的真实大小，并显示弹出层及大图*/  
       $("<img/>").attr("src", src).load(function(){  
           var windowW = $(window).width();//获取当前窗口宽度  
           var windowH = $(window).height();//获取当前窗口高度  
           var realWidth = this.width;//获取图片真实宽度  
           var realHeight = this.height;//获取图片真实高度  
           var imgWidth, imgHeight;  
           var scale = 0.8;//缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放  

           if(realHeight>windowH*scale) {//判断图片高度  
               imgHeight = windowH*scale;//如大于窗口高度，图片高度进行缩放  
               imgWidth = imgHeight/realHeight*realWidth;//等比例缩放宽度  
               if(imgWidth>windowW*scale) {//如宽度扔大于窗口宽度  
                   imgWidth = windowW*scale;//再对宽度进行缩放  
               }  
           } else if(realWidth>windowW*scale) {//如图片高度合适，判断图片宽度  
               imgWidth = windowW*scale;//如大于窗口宽度，图片宽度进行缩放  
                           imgHeight = imgWidth/realWidth*realHeight;//等比例缩放高度  
           } else {//如果图片真实高度和宽度都符合要求，高宽不变  
               imgWidth = realWidth;  
               imgHeight = realHeight;  
           }  
                   $(bigimg).css("width",imgWidth);//以最终的宽度对图片缩放  

           var w = (windowW-imgWidth)/2;//计算图片与窗口左边距  
           var h = (windowH-imgHeight)/2;//计算图片与窗口上边距  
           $(innerdiv).css({"top":h, "left":w});//设置#innerdiv的top和left属性  
           $(outerdiv).fadeIn("fast");//淡入显示#outerdiv及.pimg  
       });  
       $(outerdiv).click(function(){//再次点击淡出消失弹出层  
           $(this).fadeOut("fast");  
       });  
   }  
</script>
