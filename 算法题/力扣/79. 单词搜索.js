/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length
  const n = board[0].length
  const dx = [-1, 0, 1, 0]
  const dy = [0, -1, 0, 1]
  const visit = new Array(m).fill(0).map(() => new Array(n).fill(0))
  function dfs(x, y, visit, index) {
    if (board[x][y] !== word[index]) return false
    else if (index === word.length - 1) return true
    visit[x][y] = 1
    for (let i = 0; i < 4; i++) {
      const x0 = x + dx[i]
      const y0 = y + dy[i]
      if (
        x0 < m &&
        x0 >= 0 &&
        y0 < n &&
        y0 >= 0 &&
        !visit[x0][y0] &&
        dfs(x0, y0, visit, index + 1)
      )
        return true
    }
    visit[x][y] = 0
    return false
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, visit, 0)) return true
    }
  }
  return false
}
