const n = 4
const m = 4
const k = 4

const dp = [[1, 2, 3, 6], [2, 3, 1, 3], [3, 4, 2, 4], [3, 4, 2, 1]]
let res = 0
function check(t) {
  let sum = 0
  for (let i = 0; i < dp.length; i++) {
    const arr = dp[i]
    if (t[arr[1] - 1] - t[arr[0] - 1] === arr[2]) sum += arr[3]
  }
  res = Math.max(sum, res)
}
function dfs(t, index) {
  if (t.length === n) return check(t)
  for (let i = index; i <= m; i++) {
    t.push(i)
    dfs(t, i)
    t.pop()
  }
}
dfs([], 1)
console.log(res);