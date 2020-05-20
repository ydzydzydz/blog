---
layout: post
title: 使用Surge做iperf3客户端测试网络性能
tags: Surge Linux 
categories: Surge
---

### 服务端

```bash
# 编译安装 iperf3
yum -y update
yum -y install wget gcc make 
wget http://downloads.es.net/pub/iperf/iperf-3.7.tar.gz
cd iperf-3.7
./configure
make && make install
```
<!-- more -->

```bash
# 启动服务
iperf3 -v
iperf3 -s -D
iperf3 -h		# 查看更多选项
```

```bash
# 放行 5201 端口
firewall-cmd --zone=public --add-port=5201/tcp --permanent && firewall-cmd --reload
```

```bash
# 设置开机自启
echo '/usr/local/bin/iperf3 -s -D' >> /etc/rc.d/rc.local
chmod +x /etc/rc.d/rc.local
```

### 客户端

<div class="mermaid">
graph LR
打开Surge --> 工具
工具 --> iPerf测试
iPerf测试 --> 主机名填写服务器IP
</div>
![](https://github.com/ydzydzydz/blogphoto/raw/master/surge-iperf3/1.png)
