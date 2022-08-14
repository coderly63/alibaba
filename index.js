const swap = function (arr, i, j) {
  arr[i] = arr[i] ^ arr[j]
  arr[j] = arr[i] ^ arr[j]
  arr[i] = arr[i] ^ arr[j]
}
const heapify = function (arr, i, length) {
  for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
    if (j + 1 < length && arr[j + 1] > arr[j]) j += 1
    if (arr[j] <= arr[i]) break
    swap(arr, i, j)
    i = j
  }
}
const heapsort = function (arr) {
  let n = arr.length
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    heapify(arr, i, n)
  }
  while (n > 1) {
    n -= 1
    swap(arr, 0, n)
    heapify(arr, 0, n)
  }
  return arr
}
const arr = [1, 3, 5, 7, 2, 4, 6, 8]
console.log(heapsort(arr));