---
layout: post
title: 修改NTFS分区卷标
tags: mark
categories: mark
---

* TOC
{:toc}

## 定位设备

```bash
sudo fdisk -l 
/dev/sda3      567296  142574140 142006845  67.7G Microsoft basic data
/dev/sda7   147367936  780386303 633018368 301.9G Microsoft basic data
/dev/sda9   781410304 1707761663 926351360 441.7G Microsoft basic data
```

<!-- more -->

## 卸载设备

```bash
sudo umount /dev/sda3
sudo umount /dev/sda7
sudo umount /dev/sda9
```

## 修改卷标

```bash
sudo ntfslabel /dev/sdb3 “C 盘”
sudo ntfslabel /dev/sdb7 “D 盘”
sudo ntfslabel /dev/sdb9 “E 盘”
```

## 重启查看

```bash
reboot
sudo df -h
```

<img src="https://raw.githubusercontent.com/ydzydzydz/blogphoto/master/rename-ntfslabel/1.png" style="margin:0 auto;display:block;width:85%" />