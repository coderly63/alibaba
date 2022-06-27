<!--  -->
<template>
  <div class="box" ref="box">
    <div class="son" ref="son"></div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const box = ref()
const son = ref()
nextTick(() => {
  const { clientWidth, clientHeight, offsetTop } = son.value
  window.onscroll = function () {
    console.log(
      '🚀 ~ file: App.vue ~ line 12 ~ nextTick ~ offsetTop',
      offsetTop
    )
  }
})
</script>
<style scoped>
.box {
  width: 300px;
  height: 300px;
  position: relative;
  left: 100px;
  top: 100px;
  background-color: rgba(46, 197, 149, 0.509);
}
.son {
  position: relative;
  left: 200px;
  top: 200px;
  width: 100px;
  height: 100px;
  background-color: blueviolet;
}
</style>
