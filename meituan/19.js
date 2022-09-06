const line = read_line().split(' ')
const n = parseInt(line[0])
const m = parseInt(line[1])
const k = parseInt(line[2])

const dp = new Array(k).fill(0).map(() => new Array(4).fill(0))
for (let i = 0; i < k; i++) {
  for (let j = 0; j < 4; j++) {
    dp[i][j] = readInt()
  }
}
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