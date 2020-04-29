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
{% include valine.html %}
</div>

<script src="../static/js/activate-power-mode.js"></script>
<script>
POWERMODE.colorful = true; // 控制开启/关闭礼花特效  
POWERMODE.shake = false; // 控制开启/关闭屏幕震动特效  
document.body.addEventListener('input', POWERMODE);
</script>
