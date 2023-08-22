<template>
  <!-- <div class="box">
    <h2>light</h2>
    <JsonViewer :value="jsonData" copyable boxed sort theme="jv-light" />
    <h2>dark</h2>
    <JsonViewer :value="jsonData" copyable boxed sort theme="jv-dark" />
  </div> -->
  <input type="file" multiple="multiple" ref="fileList" @change="fileChange" />
</template>

<script setup>
// import {JsonViewer} from "vue3-json-viewer"

import { reactive, ref } from 'vue'
let obj = {
  name: 'qiufffffffffffffffffffffffffffffffffffffffffffffffffffffff', //字符串
  age: 18, //数组
  isMan: false, //布尔值
  date: new Date(),
  fn: () => {},
  arr: [1, 2, 5],
  picture:
    'https://ydlunacommon-cdn.nosdn.127.net/0ad7a2439559c55e154c1118a60f2a0d.png',
}
const jsonData = reactive(obj)
const fileList = ref()
const fileChange = function (e) {
  console.log(e.target.files)
  e.target.files = e.target.files.slice[(0, 2)]
  console.log(e.target.files)
}
</script>

<style>
.box {
  margin-top: 1rem;
}
</style>
