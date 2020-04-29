/**
 * 页面ready方法
 */
var zznb =
    " ┌─────────────────┐\n" +
    " │ ZHUANGZHUANG NB │ \n" +
    " └─────────────────┘\n" +
    "    o               ,-----._\n" +
    "  .  o         .  ,'        `-.__,------._\n" +
    " //   o      __\\'                        `-.\n" +
    "((    _____-'___))                           |\n" +
    " `:='/     (alf_/                            |\n" +
    " `.=|      |='                               |\n" +
    "    |)   O |                                  \\\n" +
    "    |      |                               /\\  \\\n" +
    "    |     /                          .    /  \\  \\\n" +
    "    |    .-..__            ___   .--' \\  |\    \\  |\n" +
    "   |o o  |     ``--.___.  /   `-'      \\  \\    \\ |\n" +
    "    `--''        '  .' / /             |  | |   | \\\n" +
    "                 |  | / /              |  | |   mmm\n" +
    "                 |  ||  |              | /| |\n" +
    "                 ( .' \\ \\              || | |\n" +
    "                 | |   \\ \\            // / /\n" +
    "                 | |    \\ \\          || |_|\n" +
    "                /  |    |_/         /_|\n" +
    "               /__/\n";
var wzdg =
    " ┌───────────────┐\n" +
    " │ 请 狗哥 喝 旺仔 │ \n" +
    " └───────────────┘\n";
var dgzd =
    " ┌─────────────────────────┐\n" +
    " │ 狗哥 喝了 毒旺仔,  抽了!!! │ \n" +
    " └─────────────────────────┘\n";

$(document).ready(function() {

    console.log("%cF12 有惊喜!!!", "text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em");
    console.log(zznb);
    console.log(wzdg + "\n" + "%c+", `font-size: 1px;padding: 122px 217px;background-image: url(https://github.com/ydzydzydz/blogphoto/raw/master/dog/1.gif);background-size: contain;background-repeat: no-repeat;color: transparent;`);
    console.log(dgzd + "\n" + "%c+", `font-size: 1px;padding: 122px 217px;background-image: url(https://github.com/ydzydzydz/blogphoto/raw/master/dog/2.gif);background-size: contain;background-repeat: no-repeat;color: transparent;`);

    backToTop();
});

/**
 * 回到顶部
 */
function backToTop() {
    $("[data-toggle='tooltip']").tooltip();
    var st = $(".page-scrollTop");
    var $window = $(window);
    var topOffset;
    //滚页面才显示返回顶部
    $window.scroll(function() {
        var currnetTopOffset = $window.scrollTop();
        if (currnetTopOffset > 0 && topOffset > currnetTopOffset) {
            st.fadeIn(500);
        } else {
            st.fadeOut(500);
        }
        topOffset = currnetTopOffset;
    });

    //点击回到顶部
    st.click(function() {
        $("html,body,window").animate({
            scrollTop: "0"
        }, 500);
    });


}

/**
 * 复制提醒
 */
document.body.oncopy = function () { alert("复制成功!😁"); };



/** 
 * 屏蔽 F12
 * 屏蔽 Ctrl+Shift+I
 * 屏蔽 Shift+F10
 * 屏蔽右键单击
 */

function disableInfo() {
    document.onkeydown = function () {
        var e = window.event || arguments[0];
        //屏蔽F12
        if (e.keyCode == 123) {
            return false;
            //屏蔽Ctrl+Shift+I
        } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
            return false;
            //屏蔽Shift+F10
        } else if ((e.shiftKey) && (e.keyCode == 121)) {
            return false;
        }
    };
    //屏蔽右键单击
    document.oncontextmenu = function () {
        return false;
    }
};

/**
 * 鼠标点击特效
 */
var a_idx = 0;
    jQuery(document).ready(function ($) {
        $("body").click(function (e) {
            var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
            var $i = $("<span/>").text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length;
            var x = e.pageX,
                y = e.pageY;
            $i.css({
                "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "color": "#ff6651"
            });
            $("body").append($i);
            $i.animate({
                "top": y - 180,
                "opacity": 0
            },
                1500,
                function () {
                    $i.remove();
                });
        });
    });   