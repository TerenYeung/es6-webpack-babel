# lesson 1 搭建es6语法学习环境

## demand description

using module bundler of webpack and applying for javascript interpretor of babel to watch immutation of script and transform it from es6 to es5

使用webpack构建工具，采用babel解释器实时监听脚本的改动并将es6代码转换为es5

## 1.1  go into webpack

### what is webpack ?

- module bundler

 recursively builds a dependency graph that includes every module your application needs
 
 then packages all of those modules into a small number of bundles - often only one
 
 to be loaded by the browser.

 - 解析主入口程序所依赖的模块成依赖树
 - 将所有依赖的模块打包成很少几个文件甚至是一个文件
 - 这个文件可以直接在浏览求中运行
 -  webpack treats every file (.css, .html, .scss, .jpg, etc.) as a module. 
 - webpack only understands JavaScript.


### core parts of webpack

entry,output,plugins,loaders

- entry

starting point of dependency graph

告诉webpack，从哪个入口文件开始去解析整个js应用的依赖树

```js
module.export = {
	entry: 'path/to/entry.js',
}
```

- output

how to treat bundle code

告诉webpack如何处理构建后的代码

```js
const path = require('path')

module.exports = {
	entry: 'path/to/entry.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	}
}
```

- loaders

Loaders in webpack transform these files into modules as they are added to your dependency graph.

Loaders的作用就是将所有的文件(html,css,scss,png,jpg)等转换为js模块，以至添加进依赖树，因为webpack只能识别js


