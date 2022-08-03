/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const res = []
  if (!matrix.length) return res
  let l = 0,
    r = matrix[0].length - 1,
    t = 0,
    b = matrix.length - 1
  while (1) {
    for (let i = l; i <= r; i++) {
      res.push(matrix[t][i])
    }
    if (t++ >= b) break
    for (let i = t; i <= b; i++) {
      res.push(matrix[i][r])
    }
    if (r-- <= l) break
    for (let i = r; i >= l; i--) {
      res.push(matrix[b][i])
    }
    if (b-- <= t) break
    for (let i = b; i >= t; i--) {
      res.push(matrix[i][l])
    }
    if (l++ >= r) break
  }
  return res
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ])
)
