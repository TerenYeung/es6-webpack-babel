## 目录

### 为什么产生sourceMap
### sourceMap是什么

---

### 为什么产生sourceMap

web应用的复杂程序提高，导致js脚本愈趋复杂，因此在开发实践中产生以下需求：

1. 压缩源码
2. 合并文件
3. 使用js的超集提高开发效率

以上3种情形在构建工具构建后所产生的代码
将与源码相差甚远；

为了提高debug效率，需要将转化后的代码自动追踪回源码；

``sourceMap``应运而生！！！

---

### 什么是sourceMap

sourceMap存储转换后的代码与之对应的转换前的位置的信息文件

有了sourceMap，debug工具将可以追踪到源码而不是转换后的代码

### 如何启用sourceMap

在转换后的代码尾部加上

```text
//# sourceMappingURL=main.js.map
```

---
## reference

[JavaScript Source Map 详解-阮一峰](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)