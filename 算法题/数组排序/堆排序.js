var swap = function (arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}
// 大顶堆
var heapify = function (arr, i, length) {
  let tmp = arr[i]
  // j是新的头结点
  for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
    tmp = arr[i]
    if (j + 1 < length && arr[j + 1] > arr[j]) j++
    if (arr[j] > tmp) {
      swap(arr, i, j)
      i = j
      heapify(arr, i, length)
    } else break
  }
}

var heapSort = function (arr) {
  const n = arr.length
  // 初始化大顶堆
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    heapify(arr, i, n)
  }
  console.log(arr);
}
heapSort([30, 15, 208993, 356, 254, 1234, 56])