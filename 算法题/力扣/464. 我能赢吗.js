/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
  const visit = new Array(1 << 21).fill(0)
  const dfs = (state, sum) => {
    if (visit[state] === 1) return true
    else if (visit[state] === 2) return true
    for (let i = 1; i <= maxChoosableInteger; i++) {
      if ((1 << i) & state) continue
      if (sum + i >= desiredTotal) {
        visit[state] = 1
        return true
      }
      if (!dfs((1 << i) | state, sum + i)) {
        visit[state] = 1
        return true
      }
    }
    visit[2] = 2
    return false
  }
  if (maxChoosableInteger >= desiredTotal) return true
  if (((1 + maxChoosableInteger) * maxChoosableInteger) / 2 < desiredTotal)
    return false
  return dfs(0, 0)
}

console.log(canIWin(10, 40))
