const lines = read_line().split(' ')
const n = parseInt(lines[0])
const k = parseInt(lines[1])
const arr = read_line().split(' ')
arr.sort((a, b) => a - b)
let res = 0
for (let i = 0; i < n; i++) {
  let l = 0, r = n - 1
  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    if (arr[i] * arr[mid] >= k) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  if (r + 1 <= i) res--
  res += n - 1 - r
}
console.log(res);