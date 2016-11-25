# HBook
Fork: [https://github.com/GitbookIO/gitbook](https://github.com/GitbookIO/gitbook)

[![NPM version](https://badge.fury.io/js/hbook.svg)](http://badge.fury.io/js/hbook)

**功能**
- 提供多种色彩模板选择;
- 提供菜单可折叠配置;
- 提供是否生成菜单序号配置;
- 提供标题与版权信息设置。


## 安装

```
$ npm install hbook-cli -g
```

初始化

```
$ hbook init
```

第1次初始化的时候会有点慢，下载 https://www.npmjs.com/package/hbook

## 更新

```
hbook versions:update latest
```

更新到最新的版本


## 编译，生成电子书

```
$ hbook build
```

## 参数及模板设置
修改 `book.json`:

```json
{
    "title": "前端工程师文档",
    "variables": {
        "theme": "theme-gray",
        "copyright": "Copyright 2015 f2edocs.com"
    },
    "collapsible_menu":false,
    "level_number":false
}
```

## 自定义样式

```json
"styles": {
    "website": "styles/website.css",
    "ebook": "styles/ebook.css",
    "pdf": "styles/pdf.css",
    "mobi": "styles/mobi.css",
    "epub": "styles/epub.css"
}
```


- title: 配置文档标题，显示在页面顶部;
- navs: 可以配置顶部菜单
- variables.theme: 模板颜色,当前支持:theme-green,theme-purple,theme-orange,theme-deepblue;
- variables.copyright: 配置版权信息，显示在页面底部;
- styles: 自定义css


## 谁在用
[http://f2edocs.com/](http://f2edocs.com/)

