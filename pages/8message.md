---
layout: page
title: 留言
permalink: /messages/
icon: fa fa-edit
isNavItem: true
---
<style>
  .liuyanban {
    width: 80%;
    margin: 0 auto;
}
.v .vwrap .vheader .vinput {
border-bottom: 1.5px solid #52c5e8;
}
.v .vwrap .vheader .vinput:focus {
border-bottom-color: #ff0000;
}
.v .vwrap{
    border: 1px solid #00adff;
    background-color: #ffffff38;
    box-shadow: 0 0 5px 0px #30c5be;

}
.v .vlist .vcard .vh .vmeta .vat {
    margin-right: 5px;
}
.v .vlist .vcard{
  border: 1px solid #00adff;
  border-radius: 5px;
  margin-top: 10px;
  padding-left: 5px;
  background-color: #ffffff38;
  box-shadow: 0 0 5px 0px #30c5be;
}
.v .vlist .vcard .vquote {
    padding-left: 0rem;
}
@media only screen and (max-width: 990px){
  .liuyanban {
    width: 100%;
    margin: 0 auto;
}

</style>


<div class="liuyanban">
<div id="vcomments"></div>
<script>
new Valine({
    el: '#vcomments',
    appId: 'edBPYFEXGjTNmYOSU6QfSs8M-gzGzoHsz',
    appKey: 'Ak42WeKa9Fx00j5RiUXUJIhK',
    notify: false,
    verify: false,
    avatar:'wavatar',
    placeholder: '评论前请务必留好真实邮箱，方便接收回复邮件',
    lang:'zh-cn'
})
</script>
</div>
