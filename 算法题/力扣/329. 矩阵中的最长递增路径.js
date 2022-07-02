/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  let res = 0
  const m = matrix.length
  const n = matrix[0].length
  const lengths = new Array(m).fill(0).map(() => new Array(n).fill(0))
  const dx = [0, -1, 0, 1]
  const dy = [-1, 0, 1, 0]
  const dfs = (x, y, lengths) => {
    if (lengths[x][y]) return lengths[x][y]
    let length = 1
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
        length = Math.max(length, dfs(x0, y0, lengths) + 1)
        lengths[x][y] = length
    }
    return length
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res = Math.max(res, dfs(i, j, lengths))
    }
  }
  console.log(res)
  return res
}

const matrix = [
  [9, 9, 4],
  [6, 6, 8],
  [2, 1, 1],
]
longestIncreasingPath(matrix)
