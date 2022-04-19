## 打包优化

* 路由懒加载（基本使用）
* 将图片在压缩网站压缩
* 使用CDN静态资源（字体，较大图片）
* 图片使用雪碧图（background设置背景）
* 通过`configureWebpack`函数式在`vue.config.js`中判断当前环境用哪些插件（如prod模式去除vconsole移动端调试插件）
* 开启GZIP压缩（`compression-webpack-plugin`）

## Hybrid

在如今移动端盛行的年代，app 都采用混合开发（hybrid），混合开发是一种开发模式，通常会涉及两种技术，web h5 和 native。

- native 主要是指 IOS 和 Android，开发效率低，每次更新都需要重新打包整个 APP，发布依赖用户的更新，并且要实现代码隔离，兼容不同版本
- web 开发和发布成本低，但是性能较低，因为 JS 为解释型语言，依赖于网络，第一次访问页面速度慢，有一个浏览器解析执行的过程。大量移动端功能无法实现，比如调用支付，二维码，相机等功能。强依赖与浏览器。

#### JSBridge

- 给 JavaScript 提供调用 Native 功能的接口，让前端更方便的调用地理位置，摄像头等
- 核心是构建 native 和非 native 的桥梁，实现双向通信
- JS 可以从 Native 获取信息，比如登录信息。JS 也可以调用 Native 功能。。。

## 服务端渲染

传统 CSR 页面弊端：

- 显示过程需要执行 JS 文件（由于页面是由 JS 代码生成的），首屏加载会比较慢
- 难以 SEO（搜索引擎优化），搜索引擎爬虫只认识 HTML 结构，不能识别 JS 代码

SSR 弊端：

- 加重服务端压力

## 浏览器渲染

- CSS 不会阻塞 DOM 解析但会阻止 DOM 渲染
- JS 会阻塞 DOM 解析
- 浏览器遇到没有 defer 和 async 的 script 标签时，会触发页面渲染
- 如果前面有 CSS 资源，那么会等到 CSS 资源加载完后才会执行脚本（即使脚本已经加载完）

## opacity 和 rgba 区别

- 父元素背景颜色设置透明度时，避免使用 background：#000；opacity：0.5，建议使用 background：rgba(0,0,0,0.5)
- 因为子元素会继承父元素的 opacity 属性，我们让它不成为子元素。新增一个子元素，将其绝对定位到父元素位置，然后在该元素上设置背景色与透明度。

## 屏幕取词

* 通过`document.caretRangeFromPoint`获取指定坐标下文档片段的Range对象
* 

## Vue项目自定义指令自动注入

```js
const componentsContext = require.context('./', true, /\.js$/);

export default {
  install(app) {
    componentsContext.keys().forEach((component) => {
      const componentConfig = componentsContext(component);
      const ctrl = componentConfig.default || componentConfig;
      app.directive(ctrl.name, ctrl)
    });
  },
}

```



## 项目难点

#### TimeLine 时间线移动端高度问题

- 由于移动端字体不统一，所以时间线的高度无法写死，而是需要动态的获取
- vue：通过 ref 获取 DOM 元素，进行遍历（通过 offsetHeight 或 clientHeight 获取高度），第一个与最后一个元素高度为一半，其余为自身高度。
- 通过 window.getComputedStyle 获取除第一个元素的 marginTop，与 offsetHeight 结合。得到 TimeLine 总高度
- 难点：由于 TimeLine 时间线是通过伪类::after 生成的，无法通过 query 获取，所以高度难以通过 JS 或动态改变类名实现，后使用:style={"--xxx": xxx}动态为 CSS 增加全局样式变量，并在 style 中通过 var()获取变量值完成 TimeLine 时间线高度设置。

```js
let totalHeight = 0
for (let i = 0; i < liList.length; i++) {
  // 如果是第一个或最后一个元素 则高度为一半
  if (i === 0 || i === liList.length - 1)
    totalHeight += liList[i].offsetHeight / 2
  else totalHeight += liList[i].offsetHeight
  // 获取li的margin
  if (i !== 0) totalHeight += parseInt(getComputedStyle(liList[i]).marginTop)
}
this.stepHeight = totalHeight
```

#### 同时请求多张图片

- 懒加载
- 预加载
- 先加载缩略图，再点击大图
- 将图片服务和应用服务分离（由于浏览器单域名并发请求有限制，一般为 2-6），使用图片服务器
- 如果是多张小图片，如 icon，可以将多张合为一张，通过 background-position 改变位置显示

#### 移动端滚动溢出部分不显示

- 由于设置了 overflow：hidden，每个套餐左上角的绝对定位的图标溢出不显示
- 在套餐块外层包裹一个 div，并设置 padding 即可解决
- 无滚动条

```css
::-webkit-scrollbar {
  display: none;
}
```

#### 夜间模式

- 通过判断 user-agent 判断是否含有 Dark 关键字
- 并且在 App.vue 或 main.js 导入夜间模式的 CSS 文件（该文件修改夜间模式的背景色，颜色，图片等）
- 对于暗夜模式图片的替换
- 1. 项目开始使用的是通过 js 文件整理图片，比如地址，title 等元素，vue 文件中通过 import 导入
  2.

#### 移动端适配

- 通过 clientWidth 或者 innerWidth 获取移动端宽度
- 再用 clientWidth / 设计稿的宽度\*100 得到的值赋给根元素的 font-size
- 后面所有大小均为设计稿中元素长度/100 rem 即可实现移动端适配
- 如今更推荐 vw，vh 实现适配

#### hybrid 下路由问题

- 路由跳转时，新路由很多功能错误，比如登录状态，会员信息等
- 由于混合开发下，跳转路由时需要新开一个界面，之前从 vuex 中获取的数据将为默认值，所以信息错误
- 将某些必要的参数通过 params 拼接在 url 上，新界面通过 route 拿到 params 就可以获取数据
- 而用户信息等较为复杂的信息，则通过重新调佣 bridge 拿到

#### swiper 之间的联动

```js
iconList.scrollLeft =
  iconList.children[activeIndex.value].offsetLeft -
  iconList.clientWidth / 2 +
  iconList.children[activeIndex.value].offsetWidth / 2
```

#### scrollLeft 无滚动动画

- 由于 scrollLeft 不是 CSS 属性，所以无法通过 transition 设置动画

- 将总距离分为一段一段的，然后使用 requestAnimationFrame 实现简易滚动动画，因为 requestAnimationFrame 相对于 setInterval 更加流畅丝滑，requestAnimationFrame 是浏览器刷新的每一帧都会执行，一般为 60 帧，执行时机更加精确

#### 安卓端图片加载失败

- 项目打包部署到测试服以后，链接协议为 https，但是测试服的图片请求资源为 http，导致 http 图片加载失败

- 使用正则将 http 改为 https 后即可正常显示

#### swiper7 官方引入失效

```js
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
```

Vue3 上的 Swiper7 引入和使用的简单解决方案是使用别名。

vue.config.js

```js
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@SwiperBundle', resolve('./node_modules/swiper/swiper-bundle.esm.js'))
      .set('@SwiperBundleCss', resolve('./node_modules/swiper/swiper-bundle.min.css'))
      .set('@Swiper', resolve('./node_modules/swiper/swiper.esm.js'))
      .set('@SwiperVue', resolve('./node_modules/swiper/vue/swiper-vue.js'))
  },
};
```

引入方式

```vue
<template lang="pug">
  Swiper(
    class="member-swiper"
    :slides-per-view="1.2"
    :space-between="'%5'"
    :initialSlide="0",
    :autoHeight="true"
    centeredSlides=true
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  )
    SwiperSlide(v-for="(item, index) in benefitList.length", :key="item.title")
      BenefitCard.card(:benefit="benefitList[index]")
</template>

<script setup>
// 导入权益详情页相关内容
import { benefitIcon, benefitList } from '@/config/iconArr'
import '@SwiperBundleCss'; // import css
import { Swiper, SwiperSlide } from '@SwiperVue'; // import component
import SwiperCore, { Pagination } from 'swiper';'

// import swiper core and plugins
SwiperCore.use([Pagination]) // declare two plugins
// 轮播图加载成功
const onSwiper = (swiper) => {
  swiper.slideTo(index)
};
// 轮播图切换
const onSlideChange = (e) => {
};
</script>
```

#### 实现非会员的遮罩层

- 跟据当前行数判断遮罩层的高度以及位置
- 通过 getComputedStyle 和 ref 获取 DOM 元素的 CSS 属性（height 以及 line-height）
- line-height 若为 normal，则值为 font-size 属性
- height / line-height > 2 即行数大于一行
- 由于手机型号的不同 部分两行元素的 height / line-height 不到 2 ---》1.9 几

```js
const { fontSize } = getComputedStyle(maskComponent.value.children[0], null)
const lineHeight = (
  maskStyle.lineHeight === 'normal' ? fontSize : maskStyle.lineHeight
).replace('px', '')
const height = maskStyle.height.replace('px', '')
if (height / lineHeight > 3) return true
```

#### 平滑滚动

- 实测 iOS 下不支持 `window.scrollTo` 的 `behavior` 参数，关于 `window.scrollTo` 参数兼容性见：[MDN scrollTo](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollTo)

- Android 下基本都支持 `window.scrollTo` 的 `behavior` 参数，但 Android 部分机型使用 `requestAnimationFrame` 做滚动动画时因达不到每秒 60 帧，会卡顿。
- 使用 settimeout 模拟`requestAnimationFrame`实现平滑滚动

```js
// requestAnimationFrame（）polyfill
window.requestAnimationFrame = function (callback, element) {
  var currTime = new Date().getTime()
  var timeToCall = Math.max(0, 16 - (currTime - lastTime))
  var id = window.setTimeout(function () {
    callback(currTime + timeToCall)
  }, timeToCall)
  lastTime = currTime + timeToCall
  return id
}
```

```js
// iOS 下使用 requestAnimationFrame 实现平滑滚动
// 见： `utils/animatedScrollTo.js`
window.scrollTo(0, 1000)

// Android 下使用 behavior
window.scrollTo({
  top: 1000,
  behavior: 'smooth',
})
```

#### Android7白屏问题

* 最开始不适配android低端机
* vuex4.0.0以上版本有bug，引入报错，引起白屏，回退到4.0.0即可解决
* vant开源组件库以及swiper有未经babel转化的es6代码

解决方式：

* package.json修改vuex版本，重新install

* vue.config.js对开源组件库进行babel转化

```js
    config.module
      .rule("compile")
      .test(/\.js$/)
      .include.add(resolve("./node_modules/vant"))
      .add(resolve("./node_modules/swiper"))
      .end()
      .use("babel")
      .loader("babel-loader")
      .options({
        presets: [["@babel/preset-env", { modules: false }]],
      });
```



#### 路由history模式打包空白

* 由于开启history模式后，打包后会出现白屏现象
* 原因是history模式下服务器接收该请求后，会去寻找该地址，但是由于该地址在服务器中不存在，所以会白屏，找不到资源

解决方式：

1. 将mode切换回hash
2. 在服务器中添加一个回退路由，也就是遇到不存在的请求时，直接返回index.html，该页面会自动根据路由进行匹配，展示相关组件

#### vue中打开新的界面

* 由于弹窗后可能继续有弹窗，所以采用新窗口的方式
* 后经过测试，创建一个a标签，target属性设置为_target（新界面）

```js
  let url = `${window.location.href.split('#')[0]}#${path}?`
  Object.keys(query).forEach((key) => {
    if (key && query[key] !== undefined) {
      url += `${key}=${query[key]}&`
    }
  })
  const a = document.createElement('a')
  a.target = '_blank'
  a.href = url
  a.click()
```

