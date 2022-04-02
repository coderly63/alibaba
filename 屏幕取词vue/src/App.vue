<template>
  <div class="box" @click="onClick">
    <div class="first">this is a first page. this is a test page. this is a first page.</div>
    <div class="second">
      <div>SECOND</div>
      <div>this is a second page. this is a test page. this is a second page.</div>
    </div>
    <div class="third">this is a third page. this is a test page. this is a third page.</div>
    <div class="fourth">
      <span>this is</span>
      <span>a</span>
      <span>dog end</span>
    </div>
  </div>
</template>

<script setup>
function onClick(event) {
  // 监测一个字符是否是构成单词的字符
  const isWord = str => {
    return str && /\w/.test(str)
  }
  const { clientX, clientY } = event
  // 通过一个点生成range
  const range = document.caretRangeFromPoint(clientX, clientY)
  console.log('range: ', range);
  const data = range.startContainer.data
  console.log('data: ', data);
  const point = range.startOffset
  if (!isWord(data[point])) {
    console.log("不是单词")
    return
  }
  else console.log('data[point]: ', data[point]);
  const wordArr = [data[point]]
  // 向前后寻找单词
  let left = range.startOffset - 1
  let right = range.startOffset + 1
  while (isWord(data[right])) {
    wordArr.push(data[right])
    right += 1
  }
  while (isWord(data[left])) {
    wordArr.unshift(data[left])
    left -= 1
  }
  range.setStart(range.startContainer, left)
  range.setEnd(range.startContainer, right)
  console.log('new range: ', range);
  console.log('wordArr: ', wordArr.join(''));
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box {
  padding: 100px;
  background-color: aqua;
}
.first {
  background-color: antiquewhite;
}
.second {
  background-color: black;
}
.third {
  background-color: red;
}
</style>
