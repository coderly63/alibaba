/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length
  const n = board[0].length
  function dfs(board, word, i, j, k) {
    if (i < 0 || i >= m || j < 0 || j > n) return false
    if (board[i][j] !== word[k]) return false
    if (k === word.length - 1) return true
    const t = board[i][j]
    board[i][j] = ''
    const flag =
      dfs(board, word, i + 1, j, k + 1) ||
      dfs(board, word, i - 1, j, k + 1) ||
      dfs(board, word, i, j + 1, k + 1) ||
      dfs(board, word, i, j - 1, k + 1)
    board[i][j] = t
    return flag
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(board, word, i, j, 0)) return true
    }
  }
  return false
}
