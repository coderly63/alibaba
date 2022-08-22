function findEdge(arr, num) {
  const n = arr.length
  let = left = 0, right = n - 1
  while (left <= right) {
    const middle = (left + right) >> 1
    console.log(left, right, middle);
    if (arr[middle] >= num) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  console.log(left, right, arr[left], arr[right]);
}

console.log(findEdge([2, 3, 3, 3, 3, 3, 3, 4], 3));