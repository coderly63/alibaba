/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  let res = 0
  const m = matrix.length
  const n = matrix[0].length
  const dx = [0, -1, 0, 1]
  const dy = [-1, 0, 1, 0]
  const dfs = (x, y, len) => {
    if (len > res) res = len
    for (let i = 0; i < 4; i++) {
      const x0 = x + dx[i]
      const y0 = y + dy[i]
      if (
        x0 >= 0 &&
        x0 < m &&
        y0 >= 0 &&
        y0 < n &&
        matrix[x0][y0] > matrix[x][y]
      )
        dfs(x0, y0, len + 1)
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, 1)
    }
  }
  console.log(res);
  return res
}

const matrix = [
  [1, 2]
]
longestIncreasingPath(matrix)
