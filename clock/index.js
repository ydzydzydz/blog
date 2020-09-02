// 利用时间对象获得 当前 时间
// var now = new Date();


var yearText = ['']
var monthText = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
var dayText = ["一号", "二号", "三号", "四号", "五号", "六号", "七号", "八号", "九号", "十号", "十一号", "十二号", "十三号", "十四号", "十五号", "十六号", "十七号", "十八号", "十九号", "二十号", "二十一号", "二十二号", "二十三号", "二十四号", "二十五号", "二十六号", "二十七号", "二十八号", "二十九号", "三十号", "三十一号"];
var weekText = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
var hourText = ["零点", "一点", "两点", "三点", "四点", "五点", "六点", "七点", "八点", "九点", "十点", "十一点", "十二点", "十三点", "十四点", "十五点", "十六点", "十七点", "十八点", "十九点", "二十点", "二十一点", "二十二点", "二十三点"];
var minuteText = ["零分", "一分", "二分", "三分", "四分", "五分", "六分", "七分", "八分", "九分", "十分",
    "十一分", "十二分", "十三分", "十四分", "十五分", "十六分", "十七分", "十八分", "十九分", "二十分",
    "二十一分", "二十二分", "二十三分", "二十四分", "二十五分", "二十六分", "二十七分", "二十八分", "二十九分", "三十分",
    "三十一分", "三十二分", "三十三分", "三十四分", "三十五分", "三十六分", "三十七分", "三十八分", "三十九分", "四十分",
    "四十一分", "四十二分", "四十三分", "四十四分", "四十五分", "四十六分", "四十七分", "四十八分", "四十九分", "五十分",
    "五十一分", "五十二分", "五十三分", "五十四分", "五十五分", "五十六分", "五十七分", "五十八分", "五十九分"];
var secondsText = ["一秒", "二秒", "三秒", "四秒", "五秒", "六秒", "七秒", "八秒", "九秒", "十秒",
    "十一秒", "十二秒", "十三秒", "十四秒", "十五秒", "十六秒", "十七秒", "十八秒", "十九秒", "二十秒",
    "二十一秒", "二十二秒", "二十三秒", "二十四秒", "二十五秒", "二十六秒", "二十七秒", "二十八秒", "二十九秒", "三十秒",
    "三十一秒", "三十二秒", "三十三秒", "三十四秒", "三十五秒", "三十六秒", "三十七秒", "三十八秒", "三十九秒", "四十秒",
    "四十一秒", "四十二秒", "四十三秒", "四十四秒", "四十五秒", "四十六秒", "四十七秒", "四十八秒", "四十九秒", "五十秒",
    "五十一秒", "五十二秒", "五十三秒", "五十四秒", "五十五秒", "五十六秒", "五十七秒", "五十八秒", "五十九秒", "六十秒"];

var clock;

var yearList = [];
var monthList = [];
var dayList = [];
var weekList = [];
var hourList = [];
var minuteList = [];
var secondsList = [];

/**
 * 分析，完成效果:
 * 1. 实现时钟排列
 * 
 * 步骤：
 * 1. 初始化，渲染dom
 * 2. 实现随着时间高亮
 * 3. 添加动画，使之移动
 */

var textList = [
    [yearText, yearList],
    [monthText, monthList],
    [dayText, dayList],
    [weekText, weekList],
    [hourText, hourList],
    [minuteText, minuteList],
    [secondsText, secondsList],

]


window.onload = function () {
    init();

    setTimeout(function () {

        initTransition();

    }, 0)

    setTimeout(function () {

        var timeArr = [0, 0, 0, 0, 0, 0, 0]

        rotateTransition(timeArr)
        setInterval(function () {
            runtime()
        }, 1000)

    }, 1000)

    // setInterval(function () {
    //     runtime()
    // }, 100)

};

// 初始化函数
// function init() {
//     clock = document.getElementById('clock');
//     // 生成标签 存放文字展示
//     for (var i = 0; i < textList.length; i++) {
//         for (var j = 0; j < textList[i][0].length; j++) {
//             var temp = createLabel(textList[i][0][j]);
//             clock.appendChild(temp);
//             // 将生成的标签存放在数组list中
//             textList[i][1].push(temp);
//         }
//     }

// }

function init() {

    clock = document.querySelector('#clock');

    for (var i in textList) {

        for (var j in textList[i][0]) {

            var temp = createLabel(textList[i][0][j]);
            // 将生成的标签存放在数组list中

            clock.appendChild(temp);

            textList[i][1].push(temp);

        }

    }


    console.log(textList);

}

// 创建标签并将文字填充标签内 接收参数为文字内容  
function createLabel(text) {
    var div = document.createElement('div');
    div.classList.add('label');
    div.innerText = text;
    return div;
}

// 获得时间
function runtime() {

    var now = new Date();

    // 获得月 日期 小时 分钟 秒钟
    var month = now.getMonth();
    var day = now.getDate();
    var week = now.getDay();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var seconds = now.getSeconds();

    var timeArr = [0, month, day-1, week, hour, minute, seconds]

    console.log(timeArr)

    clearColor();

    rotateTransition(timeArr);

    addColor(timeArr);

}

// 为时间添加样式
function addColor(timeArr) {

    // var label = document.querySelectorAll('.label')

    // for (var i in timeArr) {

    //     var len = i > 1 ? textList[i - 1][0].length : 0;
    //     var num = timeArr[i];

    //     var index = len + num;

    //     label[index].classList.add('now')

    //     // console.log(label[index])
    // }


    for (var i = 1; i < timeArr.length; i++) {
        
        var index = timeArr[i];

        // for (var j = 0; j < timeArr.length; j++) {

        //     var temp = textList[i][1][j];
        //     // var deg = 360 / textList[i][0].length * j;
        //     var deg = 360 / textList[i][0].length * (j - timeArr[i]);
        //     temp.style.transform = temp.style.transform.replace(/-?\d+deg/, deg + 'deg');

        //     // console.log(temp)
        // }

        textList[i][1][index].classList.add('now')

    }

}

// 清除现在时间颜色
function clearColor() {

    var now = document.querySelectorAll('.now');

    now.forEach(function (item) {
        item.classList.remove('now');
    })

}

// 初始展开
function initTransition() {
    for (var i in textList) {
        for (var item of textList[i][1]) {

            item.style.transform = 'translate(' + i * 80 + 'px,-50%)'
            item.style.transformOrigin = -(i * 80) + 'px 50%';

        }
    }
}

// 扇形展开
function rotateTransition(timeArr) {
    for (var i in textList) {
        for (var j in textList[i][1]) {

            var temp = textList[i][1][j];
            var deg = 360 / textList[i][0].length * (j - timeArr[i]);
            temp.style.transform = 'translate(' + i * 80 + 'px,-50%)' + ' rotate(' + deg + 'deg)';

        }
    }
}