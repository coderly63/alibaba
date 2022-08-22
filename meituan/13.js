var lines = readline().split(' ')
const n = parseInt(lines[0])
const m = parseInt(lines[1])
const map = new Array(m)
for (let i = 0; i < m; i++) {
  const lines2 = readline()
  map[i] = lines2
}
const dx = [0, -1, 0, 1]
const dy = [-1, 0, 1, 0]
const visit = new Array(m).fill(0).map(() => new Array(n).fill(0))
const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
function dfs(x, y) {
  visit[x][y] = 1
  while (x >= 0 && x < m && y >= 0 && y < n) {
    if (map[x][y] === 'U') x += 1
    else if (map[x][y] === 'D') x -= 1
    else if (map[x][y] === 'L') y += 1
    else if (map[x][y] === 'R') y -= 1
    else break
    if (visit[x][y]) break
  }
  dp[x][y] = 1
  for (let i = 0; i < 4; i++) {
    const x0 = x + dx[i]
    const y0 = y + dy[i]
    if (x0 >= 0 && x0 < m && y0 >= 0 && y0 < n && !visit[x0][y0]) {
      dfs(x0, y0)
    }
  }
  visit[x][y] = 0
}
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] === 'O') dfs(i, j)
  }
}

let res = 0
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (dp[i][j] === 0) res += 1
  }
}
console.log(res);