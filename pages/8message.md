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
    avatar:'mm',
    placeholder: '留下邮箱，回复会收到邮件提醒',
    lang:'zh-cn'
})
</script>
</div>
