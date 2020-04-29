---
layout: post
title: 学习使我快乐--实时查看网速
tags: Shell
categories: Shell
license: true
---

> 学习使我快乐 🤪
> 
> 下载地址： [network-speed.sh](https://github.com/ydzydzydz/Shell/raw/master/shell_22.sh)

<!-- more -->

<center>
<video  width="90%" src="https://github.com/ydzydzydz/blogphoto/blob/master/netwok-speed/1.mp4?raw=true" controls="controls">
</video>
</center>

```bash
wget https://raw.githubusercontent.com/ydzydzydz/Shell/master/shell_22.sh -O /root/network_speed.sh && bash /root/network_speed.sh eth0
```

```bash
#!/bin/bash

#------------------------------
# 实时显示网速
#------------------------------

check_eth (){
	if [ $# -eq 0 ]; then
		echo "$0 `ifconfig | awk -F: '/flags=/{print $1}'`" | sed ':a;N;$!ba;s%\n%/%g' && exit 1
	fi
	ifconfig $1 &> /dev/null
	if [ $? -ne 0 ]; then
		echo "$0 `ifconfig | awk -F: '/flags=/{print $1}'`" | sed ':a;N;$!ba;s%\n%/%g' && exit 1
	fi
}

set_pre (){
	if [ -z "$rx_pre" ]; then
		rx_pre=`ifconfig $1 | awk '/RX packets/{print $5}'`
		tx_pre=`ifconfig $1 | awk '/TX packets/{print $5}'`
	else
		rx_pre=$rx_next
		tx_pre=$tx_next
	fi
}

set_speed (){
	rx_next=`ifconfig $1 | awk '/RX packets/{print $5}'`
	tx_next=`ifconfig $1 | awk '/TX packets/{print $5}'`
	rx_speed=$[rx_next-rx_pre]	
	tx_speed=$[tx_next-tx_pre]
}

echo_rx (){
	if [ $rx_speed -lt 1024 ]; then
		echo -e "┃ 下载速度 $down \t┃ ${rx_speed}B/s"; tput cup 3 31; echo "┃"
	elif [ $rx_speed -lt 1048576 ]; then
		rx_speed=`echo "scale=2; ${rx_speed}/1024" | bc`
		echo -e "┃ 下载速度 $down \t┃ ${rx_speed}K/s"; tput cup 3 31; echo "┃"
	elif [ $rx_speed -lt 1073741824 ]; then
		rx_speed=`echo "scale=2; ${rx_speed}/1048576" | bc`
		echo -e "┃ 下载速度 $down \t┃ ${rx_speed}M/s"; tput cup 3 31; echo "┃"
	else
		rx_speed=`echo "scale=2; ${rx_speed}/1073741824" | bc`
		echo -e "┃ 下载速度 $down \t┃ ${rx_speed}G/s"; tput cup 3 31; echo "┃"
	fi
}

echo_tx (){
	if [ $tx_speed -lt 1024 ]; then
		echo -e "┃ 上传速度 $up \t┃ ${tx_speed}B/s"; tput cup 4 31; echo "┃"
	elif [ $tx_speed -lt 1048576 ]; then
		tx_speed=`echo "scale=2; ${tx_speed}/1024" | bc`
		echo -e "┃ 上传速度 $up \t┃ ${tx_speed}K/s"; tput cup 4 31; echo "┃"
	elif [ $tx_speed -lt 1073741824 ]; then
		tx_speed=`echo "scale=2; ${tx_speed}/1048576" | bc`
		echo -e "┃ 上传速度 $up \t┃ ${tx_speed}M/s"; tput cup 4 31; echo "┃"
	else
		tx_speed=`echo "scale=2; ${tx_speed}/1073741824" | bc`
		echo -e "┃ 上传速度 $up \t┃ ${tx_speed}G/s"; tput cup 4 31; echo "┃"
	fi
}

up_down (){
	time=`date +%S`
	if [ `expr $time % 2` -eq 0 ]; then
		up=`echo -e "\033[31m↑\033[0m"`
		down=""
	else
		up=""
		down=`echo -e "\033[32m↓\033[0m"`
	fi
}

speed_table (){
	echo -e "┏━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━┓"
	echo -e "┃ 监控网卡 \033[32m↓\033[0m\033[31m↑\033[0m\t┃ $1"; tput cup 1 31; echo "┃"
	echo -e "┣━━━━━━━━━━━━━━━╋━━━━━━━━━━━━━━┫"
	echo_rx
	echo_tx
	echo -e "┗━━━━━━━━━━━━━━━┻━━━━━━━━━━━━━━┛"
}

check_eth $1
tput civis                     # 隐藏光标
trap "tput cnorm && exit" 2    # 恢复光标后退出脚本

while :
do
	set_pre $1
	sleep 1
	clear
	up_down
	set_speed $1
	speed_table $1
done

```
