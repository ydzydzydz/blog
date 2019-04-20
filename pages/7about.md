---
layout: page
title: 关于
permalink: /about/
isNavItem: true
icon: fa fa-user
---
### 我是谁

<br/>

姓        名：**壮壮**（ZHUANGZHUANG）

性        别：男

爱        好：搞机（不搞基） 瞎折腾  乐于分享

职        业：大四狗，即将失业，😭😭😭

邮        件：bWFpbEB6aHVhbmd6aHVhbmcubWw=

常        用：[QQ](mqq://im/chat?chat_type=wpa&uin=2474745326&version=1&src_type=web)  <a class="btn btn-pop">微信</a> [Telegram](https://t.me/YDZ123456) [Twitter](https://twitter.com/YRJYJQ) [微博](https://m.weibo.cn/u/5367293800) [即刻](http://m.okjike.com/user/657C65E4-3417-4DEE-9965-71A22265973A)  

---

<br/><br/><br/>







---

### 为什么写博客

<br/>

本博客主要作为一个笔记记录一些有意思的东西，比如一些自己用过的一些软件，踩过的各种坑。

本来是想搞个微信公众号之类的，但是微信上限制越来越多，很多东西不能写，写了不能发，发了不能留，也太麻烦了，最后下定决心搭建了博客。

其实这是借助 `GitHub Page` 搭建的第二个博客（纯小白一个，什么技术都不懂,很多功能都是一点一点 Google，扒下来的,😂😂😂）

[第一个博客](https://ydzydzydz.github.io)是照着B站上的视频教程搭建的，建好的时候觉得很有成就感，后来就又找了一些好看的模板，在网上找了一些代码抄了上去，就有了这个博客。

其实我也是个小白，很多东西，都是这边看看那边翻翻，最后整理而成的，所以很多东西都很基础。如果有错误或者需要改进的的地方，[欢迎留言](/messages)。

---

<br/><br/><br/><br/>

---

### 搭建博客

<br/>


博客引擎：[Jekyll](https://jekyllrb.com/)

博客主题：[WakelessDragon/blog](https://github.com/WakelessDragon/blog)

搜索插件：[androiddevelop/jekyll-search](https://github.com/androiddevelop/jekyll-search)

邮件订阅：[Mailchimp](https://mailchimp.com/)

评论系统：[Valine](https://valine.js.org/)

评论邮件：[DesertsP/Valine-Admin](https://github.com/DesertsP/Valine-Admin)

访问统计：[不蒜子](https://busuanzi.ibruce.info/)

---

<br/><br/><br/><br/>


<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>


  <div class="pop">
    <img src='https://ydzydzydz.github.io/images/weixin.png' />
    <span class="btn close"></span>
  </div>


<style>

.btn{
  display: inner-block;
  padding: 5px;
  border-radius: 1px;
  cursor: pointer;
  font-size: 17px;
}
.pop{
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform:  translate(-50%,-50%);
  display: none;
  padding: 10px;
}

img {
    width: 200px;
}

</style>


<script>
var pop = $('.pop');
$('.btn-pop').on('click', function(e){
  e.stopPropagation();  
  pop.show();
});

$('.close').on('click', function(){
  pop.hide();
});
$(document).click(function(e){
  if(!pop.is(e.target) && pop.has(e.target).length === 0){
    pop.hide();
  }
});
</script>
