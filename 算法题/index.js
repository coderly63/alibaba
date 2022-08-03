function foo(arr) {
  let i = 0
  while (i < arr.length) {
    const t = arr[i] - 1
    if (arr[i] <= 0 ) {
      i += 1
      continue
    }
    if (arr[t] > 0) {
      arr[i] = arr[t]
      arr[t] = -1
    } else {
      arr[t] -= 1
      if (arr[t] < -1) return -arr[t] + 1
      arr[i] = 0
      i += 1
    }
  }
  return arr
}

console.log(foo([1, 6, 3, 6, 6, 1]));
