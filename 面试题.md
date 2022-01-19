## vue性能问题

* 由于vue在生成依赖的时候通过Object.defineProperty（Proxy）实现响应式，每次取变量值的时候都需要通过vm.getter取值，当在computed或者template中取data中的值时，某些情况会造成性能浪费，比如在for循环中取data中的值，如arr数组。
* 优化：解构赋值，声明一个变量保存data中的值

## Hybrid

## 服务端渲染

传统CSR页面弊端：

* 显示过程需要执行JS文件（由于页面是由JS代码生成的），首屏加载会比较慢
* 难以SEO（搜索引擎优化），搜索引擎爬虫只认识HTML结构，不能识别JS代码

SSR弊端：

* 加重服务端压力

## 浏览器渲染

* CSS不会阻塞DOM解析但会阻止DOM渲染
* JS会阻塞DOM解析
* 浏览器遇到没有defer和async的script标签时，会触发页面渲染
* 如果前面有CSS资源，那么会等到CSS资源加载完后才会执行脚本（即使脚本已经加载完）

## 项目难点

#### TimeLine时间线移动端高度问题

* 由于移动端字体不统一，所以时间线的高度无法写死，而是需要动态的获取
* vue：通过ref获取DOM元素，进行遍历（通过offsetHeight或clientHeight获取高度），第一个与最后一个元素高度为一半，其余为自身高度。
* 通过window.getComputedStyle获取除第一个元素的marginTop，与offsetHeight结合。得到TimeLine总高度
* 难点：由于TimeLine时间线是通过伪类::after生成的，无法通过query获取，所以高度难以通过JS或动态改变类名实现，后使用:style={"--xxx": xxx}动态为CSS增加全局样式变量，并在style中通过var()获取变量值完成TimeLine时间线高度设置。

#### 同时请求多张图片

* 懒加载
* 预加载
* 先加载缩略图，再点击大图
* 将图片服务和应用服务分离（由于浏览器单域名并发请求有限制，一般为2-6），使用图片服务器
* 如果是多张小图片，如icon，可以将多张合为一张，通过background-position改变位置显示