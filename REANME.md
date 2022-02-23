## vue性能问题

* 由于vue在生成依赖的时候通过Object.defineProperty（Proxy）实现响应式，每次取变量值的时候都需要通过vm.getter取值，当在computed或者template中取data中的值时，某些情况会造成性能浪费，比如在for循环中取data中的值，如arr数组。
* 优化：解构赋值，声明一个变量保存data中的值

## Hybrid

在如今移动端盛行的年代，app都采用混合开发（hybrid），混合开发是一种开发模式，通常会涉及两种技术，web h5和native。

* native主要是指IOS和Android，开发效率低，每次更新都需要重新打包整个APP，发布依赖用户的更新，并且要实现代码隔离，兼容不同版本
* web开发和发布成本低，但是性能较低，因为JS为解释型语言，依赖于网络，第一次访问页面速度慢，有一个浏览器解析执行的过程。大量移动端功能无法实现，比如调用支付，二维码，相机等功能。强依赖与浏览器。

#### JSBridge

* 给 JavaScript 提供调用 Native 功能的接口，让前端更方便的调用地理位置，摄像头等
* 核心是构建native和非native的桥梁，实现双向通信
* JS可以从Native获取信息，比如登录信息。JS也可以调用Native功能。。。
* 

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

## opacity和rgba区别

* 父元素背景颜色设置透明度时，避免使用background：#000；opacity：0.5，建议使用background：rgba(0,0,0,0.5)
* 因为子元素会继承父元素的opacity属性，我们让它不成为子元素。新增一个子元素，将其绝对定位到父元素位置，然后在该元素上设置背景色与透明度。

## 项目难点

#### TimeLine时间线移动端高度问题

* 由于移动端字体不统一，所以时间线的高度无法写死，而是需要动态的获取
* vue：通过ref获取DOM元素，进行遍历（通过offsetHeight或clientHeight获取高度），第一个与最后一个元素高度为一半，其余为自身高度。
* 通过window.getComputedStyle获取除第一个元素的marginTop，与offsetHeight结合。得到TimeLine总高度
* 难点：由于TimeLine时间线是通过伪类::after生成的，无法通过query获取，所以高度难以通过JS或动态改变类名实现，后使用:style={"--xxx": xxx}动态为CSS增加全局样式变量，并在style中通过var()获取变量值完成TimeLine时间线高度设置。

```js
let totalHeight = 0
for (let i = 0; i < liList.length; i++) {
    // 如果是第一个或最后一个元素 则高度为一半
    if (i === 0 || i === liList.length - 1)
        totalHeight += liList[i].offsetHeight / 2
    else totalHeight += liList[i].offsetHeight
    // 获取li的margin
    if (i !== 0)
        totalHeight += parseInt(getComputedStyle(liList[i]).marginTop)
}
this.stepHeight = totalHeight
```



#### 同时请求多张图片

* 懒加载
* 预加载
* 先加载缩略图，再点击大图
* 将图片服务和应用服务分离（由于浏览器单域名并发请求有限制，一般为2-6），使用图片服务器
* 如果是多张小图片，如icon，可以将多张合为一张，通过background-position改变位置显示

#### 移动端滚动溢出部分不显示

* 由于设置了overflow：hidden，每个套餐左上角的绝对定位的图标溢出不显示
* 在套餐块外层包裹一个div，并设置padding即可解决
* 无滚动条

```css
::-webkit-scrollbar {
 display: none   
}
```

#### 夜间模式

* 通过判断user-agent判断是否含有Dark关键字
* 并且在App.vue或main.js导入夜间模式的CSS文件（该文件修改夜间模式的背景色，颜色，图片等）

#### 移动端适配

* 通过clientWidth或者innerWidth获取移动端宽度
* 再用clientWidth / 设计稿的宽度*100得到的值赋给根元素的font-size
* 后面所有大小均为设计稿中元素长度/100 rem即可实现移动端适配
* 如今更推荐vw，vh实现适配

#### hybrid下路由问题

* 路由跳转时，新路由很多功能错误，比如登录状态，会员信息等
* 由于混合开发下，跳转路由时需要新开一个界面，之前从vuex中获取的数据将为默认值，所以信息错误
* 将某些必要的参数通过params拼接在url上，新界面通过route拿到params就可以获取数据
* 而用户信息等较为复杂的信息，则通过重新调佣bridge拿到