---
layout: post
title: Telegram即时预览
tags: Telegram blog 瞎折腾
categories: blog
---

壮壮看到很多文章分享到 Telegram 中会有一个及时预览的按键，点进去也不用跳转到浏览器打开，直接就可以查看文章，比如 [medium.com](https://instantview.telegram.org/samples/medium.com/)、[telegra.ph](https://instantview.telegram.org/samples/telegra.ph/)，就忍不住躁动的心，也想整一个。然后就找教程，昨天 Google 了一下午，啥也没找到，找到的看不懂。😂

<!-- more -->

最后还是在 YouTube 上找到了视频教程。然后就照着改啊改，就差不多搞出来了。

<iframe width="100%" height="315" src="https://www.youtube.com/embed/Iy3txWmkRh0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



---

简单说一下步骤：

+ 先进入 [instantview.telegram.org](https://instantview.telegram.org/) 登陆，

  ![](https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/instant-view/1.png)

+ 在 Telegram 中，确认登陆

  ![](https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/instant-view/2.png)

+ 创建模板

  ![](https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/instant-view/3.png)

+ 输入域名后，回车

  ![](https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/instant-view/4.png)

+ 填写 URL

  ![](https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/instant-view/5.png)

+ 然后就是修改模板了

  ```
  ~version: "2.1"                                 // 版本号     
  author: "ZHUANGZHUANG"                          // 作者
  author_url:"@YDZ123456"                         // 作者链接
  channel: "@banyungong666"                       // Telegram 频道
  title://h2                                      // 文章标题
  body://div[has-class("content col-lg-9")]       // 内容主体
  ```

  **以上只作为示例，具体写法请参考：[官方手册](https://instantview.telegram.org/docs)**

+ 模板修改无误后，分享到 Telegram 中即可

  ![](https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/instant-view/6.png)

+ 最后效果图：

  ![](https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/instant-view/7.png)
  
---

> 模板建好后，只需替换文章链接即可，无需每次在重新建立。
>
> 最后分享的链接是 UrlEncode 编码过的，如果觉得太长可以 UrlEncode 解码后分享（尽量不要这么做，以免出现其它问题）。
>
> 经测试，将分享链接生成短网址后是不会有即时预览效果的 (但是真的好长啊)！！！	

> **壮壮博客分享到 Telegram 及时预览的地址是：**
>
> https://t.me/iv?url=[文章地址]/&rhash=b87eb191a12a3a
>
> 但是有点小问题，`<img>`标签报错，然后就删了，所以是看不到图的，没想好怎么解决，希望有大佬能救救孩子😋



