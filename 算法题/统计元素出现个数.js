var getNumberOfArray = function (arr) {
  const n = arr.length
  let i = 0
  while (i < n) {
    if (arr[i] <= 0) {
      i++
      continue
    }
    const index = arr[i] - 1
    if (arr[index] > 0) {
      arr[i] = arr[index]
      arr[index] = -1
    } else {
      arr[index]--
      arr[i++] = 0
    }
  }
  return arr.map((num) => (num < 0 ? -num : num))
}

console.log(getNumberOfArray([2, 5, 5, 2, 3, 6, 6, 6, 6, 6, 7]))
