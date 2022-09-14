
const map = [
  ['.', '.', '.', '.', '.'],
  ['.', 'R', 'R', 'D', '.'],
  ['.', 'U', '.', 'D', 'R'],
  ['.', 'U', 'L', 'L', '.'],
  ['.', '.', '.', '.', 'O'],
]
const m = map.length
const n = map[0].length
const dx = [0, -1, 0, 1]
const dy = [-1, 0, 1, 0]
const visit = new Array(m).fill(0).map(() => new Array(n).fill(0))
const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
function dfs(x, y) {
  if (map[x][y] === 'O') return true
  if (dp[x][y] === true) return true
  if (dp[x][y] === false) return false
  visit[x][y] = 1
  if (map[x][y] === '.') {
    for (let i = 0; i < 4; i++) {
      const x0 = x + dx[i]
      const y0 = y + dy[i]
      if (x0 >= 0 && x0 < m && y0 >= 0 && y0 < n && !visit[x0][y0]) {
        if (dfs(x0, y0)) {
          dp[x][y] = true
          visit[x][y] = 0
          return true
        }
      }
    }
  } else {
    let x0 = x, y0 = y
    if (map[x][y] === 'U') x0 = x - 1
    else if (map[x][y] === 'D') x0 = x + 1
    else if (map[x][y] === 'L') y0 = y - 1
    else y0 = y + 1
    if (x0 >= 0 && x0 < m && y0 >= 0 && y0 < n && !visit[x0][y0]) {
      if (dfs(x0, y0)) {
        dp[x][y] = true
        visit[x][y] = 0
        return true
      } else {
        dp[x][y] = false
        visit[x][y] = 0
        return false
      }
    }
  }
  visit[x][y] = 0
  return false
}
let ans = 0
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j)) {
      ans += 1
      console.log(dp);
    }
  }
}
console.log(m * n - ans);