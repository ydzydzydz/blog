---
    layout: null
---

/**
 * 页面ready方法
 */
$(document).ready(function() {
    generateContent();
    share();
    disqus();
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

function share(){
    window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"24"},"share":{}};
    with(document)0[getElementsByTagName("script")[0].parentNode.appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
}


function disqus(){
    /* * * CONFIGURATION VARIABLES * * */
    var disqus_shortname = '{{site.disqus_shortname}}';
var disqus = {    //插入这一行代码 (1/5)
load : function disqus(){    //插入这一行代码 (2/5)
  var disqus_config = function () {
    this.page.url = '{{ page.permalink }}';
    this.page.identifier = '{{ page.path }}';
    this.page.title = '{{ page.title| addslashes }}';
    {% if __('disqus') !== 'disqus' -%}
      this.language = '{{ __('disqus') }}';
    {% endif -%}
  };
  function loadComments () {
    var d = document, s = d.createElement('script');
    s.src = 'https://{{theme.disqus.shortname}}.disqus.com/embed.js';
    s.setAttribute('data-timestamp', '' + +new Date());
    (d.head || d.body).appendChild(s);
  }

  {% if theme.disqus.lazyload %}
    $(function () {
      var offsetTop = $('#comments').offset().top - $(window).height();
      if (offsetTop <= 0) {
        // load directly when there's no a scrollbar
        loadComments();
      } else {
        $(window).on('scroll.disqus_scroll', function () {
          var scrollTop = document.documentElement.scrollTop;
          if (scrollTop >= offsetTop) {
            $(window).off('.disqus_scroll');
            loadComments();
          } 
        });
      }
    });
  {% else %}
    loadComments();
  {% endif %}
  $('#load-disqus').remove();    //插入这一行代码 (3/5)
  }    //插入这一行代码 (4/5)
}    //插入这一行代码 (5/5)
    document.getElementsByTagName("script")[0].parentNode.appendChild(dsq);
}
