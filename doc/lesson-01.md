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

loaders通常包含两个属性去转换静态资源为js模块

test属性：识别文件类型
use属性：采用特定的loader

```
const path = require('path');

const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  }
};

module.exports = config;
```
[more](https://webpack.js.org/concepts/loaders/)

- Plugins

loaders只是将各种静态文件转换为js模块，plugins允许为打包模块提供额外的处理

---

## 1.2 deep learning to webpack

### entry

```
module.exports = {
	entry: ''
}
```

### output 

Options affecting the output of the compilation. output options tell webpack how to write the compiled files to disk

```
const config = {
  output: {
    filename: 'bundle.js',
    path: '/home/proj/public/assets'
  }
};

module.exports = config;
```

### loaders

loaders preprocess files as you require() or “load” them.

Loaders can transform files from a different language (like TypeScript) to JavaScript, or inline images as data URLs. 

static file : 

	- img
	- css/less/sass/scss/stylus
	- html/ejs
	- js/jsx/ts


```js

$ npm install css-loader -D
$ npm install ts-loader -D

module.exports = {
	module: {
		rules: [
			{
				test: '/\.css$/',
				use: [
					{
						loader: 'style-loader',
					},{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}
				]
			},
			{
				test: '/\.ts$/',
				use: 'ts-loader'
			}
		]
	}
}

```

```
require('style-loader!css-loader?modules!./styles.css');

Loaders accept query parameters. This can be used to pass configuration to the loader.
```

### plugins

