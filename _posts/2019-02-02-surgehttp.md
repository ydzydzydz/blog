---
layout: post
title: Surge共享代理
tags: Surge HTTP 共享代理
categories: Surge
img: https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/surge-http/1.png
---



一些使用Surge的朋友经常会问这样一个问题：

> 可以用自己的设备开启Surge，然后别人连接我开的热点，实现代理功能么？

答案是：**不能！**

但是

<!-- more -->

> Surge可以作为一个标准的HTTP/SOCKS5代理服务器向**Wi-Fi网络下**的其他设备提供服务器。默认HTTP端口：`6152`,SOCKS5端口：`6153`

如图所示：

![1234](https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/surge-http/1.png)

---

### 详细步骤

1.设备A开启热点

2.设备B连接**设备A开启的热点**

3.设备C连接**设备A开启的热点**（此时设备B,设备C在同一Wi-Fi网络下）

4.设备B开启Surge，打开`高级设置`-`允许Wi-Fi访问`，注意此时的`当前Wi-Fi IP`和 `HTTP代理服务端口`

5.设备C打开无线局域网，进入`HTTP代理设置`，选择`手动`

6.将步骤4中所查看到的`当前Wi-Fi IP`和 `HTTP代理服务端口`分别对应填写到`服务器`和`端口`存储即可

---



<img src="https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/surge-http/b.png" alt="设备B" width="50%"><img src="https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/surge-http/c.png" alt="设备C" width="50%">



此时，设备C就已经可以通过设备B中Surge提供的HTTP代理服务器上网了。

另外，Quantumult开启共享代理在`附加功能`中，`监听IP`与`监听端口`在主页显示，就不再赘述了。





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
