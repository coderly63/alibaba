<template>
  <div>
    <input type="file" @change="handleFileChange" />
    <el-button @click="handleUpload">上传</el-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
// 默认切片文件大小
const SIZE = 1024 * 1024;
// 手写ajax
function ajax(type, url, data, onProgress) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = onProgress;
    xhr.open(type, url);
    // xhr.setRequestHeader("content-type", "application/json");
    xhr.send(data);
    xhr.onreadystatechange = function () {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        resolve(xhr);
      }
    };
  });
}
// 选择文件的回调函数
let FILE;
let fileChunkList = [];
console.log("fileChunkList: ", fileChunkList);
function handleFileChange(e) {
  FILE = e.target.files[0];
  console.log("FILE: ", FILE);
}
// 切片文件
function createFileChunk(size = SIZE) {
  let cur = 0;
  while (cur < FILE.size) {
    fileChunkList.push({ file: FILE.slice(cur, cur + size) });
    cur += size;
  }
}
async function mergeRequest() {
  await ajax(
    "post",
    "http://localhost:8000/merge",
    JSON.stringify({ filename: FILE.name })
  );
}

// 上传切片文件
async function uploadChunks() {
  const requestList = fileChunkList.map(({ chunk, hash }, index) => {
    const formData = new FormData();
    formData.append("chunk", chunk);
    formData.append("hash", hash);
    formData.append("filename", FILE.name);
    return ajax(
      "post",
      "http://localhost:8000",
      formData,
      progress(fileChunkList[index])
    );
  });
  console.log("requestList: ", requestList);
  const res = await Promise.all(requestList);
  console.log("res: ", res);
  // 合并切片
  const mergeRes = await mergeRequest();
  console.log("mergeRes: ", mergeRes);
}
// 上传文件的回调
function handleUpload() {
  if (!FILE) return;
  createFileChunk();
  fileChunkList = fileChunkList.map(({ file }, index) => ({
    chunk: file,
    hash: FILE.name + "-" + index,
  }));
  uploadChunks();
  // console.log("fileChunkList: ", fileChunkList);
}
// 进度条显示
function progress(item) {
  return (e) => {
    console.log("e: ", e);
    item.percentage = parseInt(String((e.loaded / e.total) * 100));
    console.log(`${item.hash} ===>${item.percentage}`);
  };
}
// 总进度条
function totalProgress() {
  const loaded = fileChunkList
    .map((item) => SIZE * item.percentage)
    .reduce((acc, cur) => acc + cur);
  return parseInt((loaded / FILE.size).toFixed(2));
}
</script>
