/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const visit = new Array(n + 1).fill(0)
  const dfs = function (n) {
    if (n === 1 || n === 0) return 1
    if (visit[n]) return visit[n]
    let count = 0
    for (let i = 1; i <= n; i++) {
      const left = dfs(i - 1)
      const right = dfs(n - i)
      count += left * right
    }
    visit[n] = count
    return count
  }
  return dfs(n)
}
