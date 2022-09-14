const n = parseInt(readline())
const arr = readline()
  .split(' ')
  .map((item) => +item)
let res = 0
for (let i = 0; i < n; i++) {
  if (!arr[i]) continue
  if (i === n - 1 || i === n - 2) {
    res += arr[i]
    continue
  }
  const count1 = arr[i]
  const count2 = Math.floor(arr[i + 1] / 2)
  const count3 = Math.floor(arr[i + 2] / 3)
  const count = Math.min(count1, count2, count3)
  res += count * 5
  arr[i] -= count
  arr[i + 1] -= count * 2
  arr[i + 2] -= count * 3
  res += arr[i]
}
console.log(res)
