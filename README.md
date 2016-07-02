# HBook
Fork: [https://github.com/GitbookIO/gitbook](https://github.com/GitbookIO/gitbook)

[![NPM version](https://badge.fury.io/js/hbook.svg)](http://badge.fury.io/js/hbook) [![Build Status](https://travis-ci.org/simonguo/hbook.png?branch=master)](https://travis-ci.org/simonguo/hbook)



**功能**
- 提供多种色彩模板选择:theme-green,theme-purple,theme-orange,theme-gray;
- 提供菜单可折叠配置;
- 提供是否生成菜单序号配置;
- 提供标题与版权信息设置。

电脑上的效果

![image](https://raw.githubusercontent.com/simonguo/gitbook-ext/master/demo-pc.png)

手机上的效果

![image](https://raw.githubusercontent.com/simonguo/gitbook-ext/master/demo-m.png)

预览效果 [http://f2edocs.com/](http://f2edocs.com/)

深蓝色主题效果

![image](https://raw.githubusercontent.com/simonguo/gitbook-ext/master/demo-deepblue.png
)

## 安装

```
$ npm install hbook-cli -g
```

初始化

```
$ hbook init
```

## 编译，生成电子书

```
$ hbook build
```

## 参数及模板设置
修改 `book.json`:

```json
{
    "variables": {
        "title": "前端工程师文档",
        "theme": "theme-gray",
        "copyright": "Copyright 2015 f2edocs.com"
    },
    "collapsible_menu":true,
    "level_number":false,
    "links": {
        "gitbook": false,
        "sharing": {
            "all":false,
            "vk": false,
            "facebook": true,
            "twitter": true,
            "google": true,
            "weibo": true
        }

    }
}
```

- variables-title: 配置文档标题，显示在页面顶部;
- variables-theme: 模板颜色,当前支持:theme-green,theme-purple,theme-orange,theme-deepblue;
- variables-copyright: 配置版权信息，显示在页面底部;
- collapsible_menu: 使用折叠菜单;
- level_number: 使用菜单结构序号;
- links: 开启一些连接.

## 谁在用
[http://f2edocs.com/](http://f2edocs.com/) 

