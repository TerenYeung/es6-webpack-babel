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

### modules

webpack可以解析以下几种方式引入的模块，使的打包后的文件可以在浏览器环境下运行

webpack supports modules written in a variety of languages and preprocessors, via loaders

An ES2015 import statement
A CommonJS require() statement
An AMD define and require statement
An @import statement inside of a css/sass/less file.
An image url in a stylesheet (url(...)) or html`` (<img src=...>)``file.

### module resolver

The resolver helps webpack find the module code that needs to be included in the bundle for every such require/import statement.

---

## code spliting

- css

处于异步并行加载css以防止页面出现白屏，可将css文件单独打包出来

- library

框架和工具库一般不会频繁发生改变，而应用代码本身经常改变；

浏览器会根据缓存头来缓存资源文件，如果文件没有被改变，文件将会被缓存从而不用去再次请求 cdn。为了利用这一特性，我们希望不管应用本身的代码如何改变，vendor 文件的 hash 始终恒定不变；

把 vendor 和应用代码的 bundle 分离时，才能实现这一点

CommonsChunkPlugin

允许我们从不同的 bundle 中提取所有的公共模块，并且将他们加入公共 bundle 中。如果公共 bundle 不存在，那么它将会创建一个出来

### 异步下载chunk

- 动态引入

ES2015 loader 规范定义了 import() 作为一种在运行时(runtime)动态载入 ES2015 模块的方法。

 - import()作为一个分离点
 - 将引入模块作为一个单独的chunk
 - 返回一个Promise对象

 ### 生产环境构建









