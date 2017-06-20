## 常用的plugins

[Extract Text Plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)

moves all the required *.css modules in entry chunks into a separate CSS file

no longer inlined into the JS bundle, but in a separate CSS file (styles.css)

``advantage``

>  If your total stylesheet volume is big, it will be faster because the CSS bundle is loaded in parallel to the JS bundle.

### 安装

```shell
$ npm install --save-dev extract-text-webpack-plugin
```

[CommonsChunkPlugin]

作用：
从多个入口chunk中提取出公共模块，通过将公共模块拆出来，最终合成的文件能够在最开始的时候加载一次，便存起来到缓存中供后续使用

[DefinePlugin](https://doc.webpack-china.org/plugins/define-plugin/)

DefinePlugin 允许创建一个在编译时可以配置的全局常量
[DDFE](http://chuansong.me/n/1428502651432)

[DllPlugin](http://engineering.invisionapp.com/post/optimizing-webpack/)

[webpack tutorial](https://survivejs.com/webpack/introduction/)
