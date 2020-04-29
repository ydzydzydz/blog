---
    layout: null
---

/**
 * 页面ready方法
 */
$(document).ready(function() {
    generateContent();


});

/**
 * 侧边目录
 */
function generateContent() {
    var $mt = $('.toc');
    var toc = $(".post ul#markdown-toc").clone().get(0);
    $mt.each(function(i,o){
        $(o).html(toc);
    });
}
