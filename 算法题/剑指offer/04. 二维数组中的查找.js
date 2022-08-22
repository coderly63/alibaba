/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  const m = matrix.length
  if (m <= 0) return false
  const n = matrix[0].length
  let i = m - 1, j = 0
  while (i >= 0 && i < m && j >= 0 && j < n) {
    if (matrix[i][j] === target) return true
    else if (matrix[i][j] < target) j += 1
    else i -= 1
  }
  return false
};

const arr = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
console.log(findNumberIn2DArray(arr, 32));