---
layout: post
title: 命令提示符显示时间
tags: Linux
categories: Linux
---

##	安装 zsh

```bash
sudo apt-get install zsh
```

<!-- more -->

## 编辑 ~/.zshrc

```bash
setopt PROMPT_SUBST
{% raw %}PROMPT='%B%F{yellow}[%D{%H:%M:%S}]%f%F{red}[%n@%m%f:%F{blue}${${(%):-%~}}%f%F{red}]%f$ %b'{% endraw %}
TMOUT=1
TRAPALRM() {
	 zle reset-prompt
}
```

## 重新设置提示符

```bash
source ~/.zshrc
```

或者

```bash
zsh
```

## 效果图

![](https://github.com/ydzydzydz/blogphoto/raw/master/terminal-time/1.gif)

---

**来源： [https://www.helplib.com/ubuntu/article_157742](https://www.helplib.com/ubuntu/article_157742)**

