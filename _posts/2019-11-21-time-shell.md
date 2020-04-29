---
layout: post
title: 学习使我快乐--倒计时脚本
tags: Shell
categories: Shell
license: true
---

> 前段时间老师在课间运行了个倒计时十五分钟的脚本，就自己动手实现了一下
>
> 可能方法有点蠢，但是好在能用
>
> 最后，学习使我快乐 🤪
> 
> 下载地址： [time.sh](https://github.com/ydzydzydz/Shell/raw/master/shell_08.sh)

<!-- more -->

![](https://github.com/ydzydzydz/blogphoto/raw/master/time-shell/1.gif)

```bash
#!/bin/bash

#------------------------------------
# 1.倒计时
# 2.计时器
# 3.时钟
#------------------------------------

# 计算[时、分、秒]
SetHMS (){
	Ling=0
	if [ "$Miao" -ge 3600 ];then 
		let Hour=$[i/3600]; let Minuite=$[i/60%60]; let Second=$[$i%60]
	else
		let Hour=$[i/3600]; let Minuite=$[i/60]; let Second=$[$i%60]
	fi
	if [ "$Hour" -lt 10 ];then
		Hour=$Ling$Hour
	fi
	if [ "$Minuite" -lt 10 ];then
		Minuite=$Ling$Minuite
	fi
	if [ "$Second" -lt 10 ];then
		Second=$Ling$Second
	fi
	Hour01=${Hour:0:1};Hour02=${Hour:1:1}
	Minuite01=${Minuite:0:1};Minuite02=${Minuite:1:1}
	Second01=${Second:0:1};Second02=${Second:1:1}
}

# 定义数组
row1=("000000000" "    11   " "222222222" "333333333" "44     44" "555555555" "666666666" "777777777" "888888888" "999999999" "     ")
row2=("00     00" "   111   " "       22" "       33" "44     44" "55       " "66       " "       77" "88     88" "99     99" "     ")
row3=("00     00" "  1111   " "       22" "       33" "44     44" "55       " "66       " "       77" "88     88" "99     99" " *** ")
row4=("00     00" "    11   " "       22" "       33" "44     44" "55       " "66       " "       77" "88     88" "99     99" " *** ")
row5=("00     00" "    11   " "222222222" "333333333" "444444444" "555555555" "666666666" "       77" "888888888" "999999999" "     ")
row6=("00     00" "    11   " "22       " "       33" "       44" "       55" "66     66" "       77" "88     88" "       99" " *** ")
row7=("00     00" "    11   " "22       " "       33" "       44" "       55" "66     66" "       77" "88     88" "       99" " *** ")
row8=("00     00" "    11   " "22       " "       33" "       44" "       55" "66     66" "       77" "88     88" "       99" "     ")
row9=("000000000" "111111111" "222222222" "333333333" "       44" "555555555" "666666666" "       77" "888888888" "999999999" "     ")

# 打印数组
BigNum (){
	tput cup $[Height2+0] $Width2; echo -e "\033[31m${row1[$Hour01]}" "${row1[$Hour02]}" "${row1["10"]}" "${row1[$Minuite01]}" "${row1[$Minuite02]}" "${row1["10"]}" "${row1[$Second01]}" "${row1[$Second02]}\033[0m"
	tput cup $[Height2+1] $Width2; echo -e "\033[31m${row2[$Hour01]}" "${row2[$Hour02]}" "${row2["10"]}" "${row2[$Minuite01]}" "${row2[$Minuite02]}" "${row2["10"]}" "${row2[$Second01]}" "${row2[$Second02]}\033[0m"
	tput cup $[Height2+2] $Width2; echo -e "\033[31m${row3[$Hour01]}" "${row3[$Hour02]}" "${row3["10"]}" "${row3[$Minuite01]}" "${row3[$Minuite02]}" "${row3["10"]}" "${row3[$Second01]}" "${row3[$Second02]}\033[0m"
	tput cup $[Height2+3] $Width2; echo -e "\033[31m${row4[$Hour01]}" "${row4[$Hour02]}" "${row4["10"]}" "${row4[$Minuite01]}" "${row4[$Minuite02]}" "${row4["10"]}" "${row4[$Second01]}" "${row4[$Second02]}\033[0m"
	tput cup $[Height2+4] $Width2; echo -e "\033[31m${row5[$Hour01]}" "${row5[$Hour02]}" "${row5["10"]}" "${row5[$Minuite01]}" "${row5[$Minuite02]}" "${row5["10"]}" "${row5[$Second01]}" "${row5[$Second02]}\033[0m"
	tput cup $[Height2+5] $Width2; echo -e "\033[31m${row6[$Hour01]}" "${row6[$Hour02]}" "${row6["10"]}" "${row6[$Minuite01]}" "${row6[$Minuite02]}" "${row6["10"]}" "${row6[$Second01]}" "${row6[$Second02]}\033[0m"
	tput cup $[Height2+6] $Width2; echo -e "\033[31m${row7[$Hour01]}" "${row7[$Hour02]}" "${row7["10"]}" "${row7[$Minuite01]}" "${row7[$Minuite02]}" "${row7["10"]}" "${row7[$Second01]}" "${row7[$Second02]}\033[0m"
	tput cup $[Height2+7] $Width2; echo -e "\033[31m${row8[$Hour01]}" "${row8[$Hour02]}" "${row8["10"]}" "${row8[$Minuite01]}" "${row8[$Minuite02]}" "${row8["10"]}" "${row8[$Second01]}" "${row8[$Second02]}\033[0m"
	tput cup $[Height2+8] $Width2; echo -e "\033[31m${row9[$Hour01]}" "${row9[$Hour02]}" "${row9["10"]}" "${row9[$Minuite01]}" "${row9[$Minuite02]}" "${row9["10"]}" "${row9[$Second01]}" "${row9[$Second02]}\033[0m"
}

# 打印剩余时间
SmallNum (){
	tput cup $Height3 $Width3; echo $Hour:$Minuite:$Second
}

# 打印标题
Tittle (){
	tput cup $[Height2-3] $Width2 2> /dev/null; echo -e "\033[32m$Text\033[0m"
}

# 计算光标位置
GuangBiao (){
	Width=`stty size | awk '{print $2}'`     # 获取终端宽度
	Width1=$[Width-71]
	Width2=$[Width1/2]
	Width3=$[(Width-8)/2]
	Height=`stty size | awk '{print $1}'`    # 获取终端高度
	Height1=$[Height-9]
	Height2=$[Height1/2]
	Height3=$[(Height-1)/2]
}

# 判断终端长宽, 不同显示
Display (){
	if [ $Width2 -lt 0 ];then
	 	SmallNum
	elif [ $[Height2-3] -lt 0 ];then
		SmallNum
	else
		BigNum
	fi
}

# 倒计时
PrintfDown (){
	for ((i=$Miao;i>=0;i--))
	do
		clear                                     # 清屏
		GuangBiao
		if [ "$i" -eq 0 ]; then
			Text="倒计时结束"; Tittle
		else
			Text="倒计时:[$Fen 分钟]"; Tittle
			echo
		fi
		SetHMS
		Display
		sleep 1
	done
}

# 计时器
PrintfUp (){
	i=0
	while :
	do
		clear
		GuangBiao
		let Miao=$i
		SetHMS
		Text="计时:[${i} 秒钟]"; Tittle
		Display
		sleep 1
		let i++
	done
}

# 当前时间
PrintfNow () {
	while :
	do
		clear
		GuangBiao
		Date=`date +"%Y-%m-%d %A"`
		Hour=`date +"%H"`; Minuite=`date +"%M"`; Second=`date +"%S"`
		i=`echo "$Hour*3600+$Minuite*60+$Second" | bc`		
		let Miao=$i
		SetHMS
		Text="[当前时间] $Date"; Tittle
		Display
		sleep 1
	done
}

# 选择模式
SelectModule (){
	read -p "[1.倒计时 2.计时器 3.时钟] 选择：" Select
	case $Select in
	1)
		read -p "[？分钟倒计时]:" Fen            # 获取变量
		Miao=`echo "scale=2; $Fen*60" | bc`    # 换算时间
		Miao=${Miao%.*}                        # 截取整数
		tput civis                             # 隐藏光标
		PrintfDown                             # 打印输出
		tput cnorm;;                           # 恢复光标
	2)
		tput civis
		PrintfUp
		tput cnorm;;
	3)
		tput civis
		PrintfNow
		tput cnorm;;
	*)
		echo -e "\033[31m1.倒计时\t 2.计时器\t 3.时钟\033[0m"
	esac
}

trap "tput cnorm && exit" 2                # 先回复光标,在退出脚本
SelectModule

```

