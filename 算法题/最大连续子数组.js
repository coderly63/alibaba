function maxSubArr(arr) {
  const n = arr.length
  let res = arr[0]
  let sum = arr[0]
  for (let i = 1; i < n; i++) {
    sum = sum + arr[i] < arr[i] ? arr[i] : sum + arr[i]
    res = Math.max(sum, res)
  }
  return res
}

const arr = [1, -2, 3, 10, -4, 7, 2, -5]
console.log(maxSubArr(arr))
