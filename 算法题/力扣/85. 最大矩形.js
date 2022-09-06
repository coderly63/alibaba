/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const heights = new Array(n).fill(0)
  let res = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '0') heights[j] = 0
      else heights[j] += 1
    }
    res = Math.max(res, largestRectangleArea(heights))
  }
  return res
}

function largestRectangleArea(heights) {
  const n = heights.length
  const stack = []
  let res = 0
  for (let i = 0; i <= n; i++) {
    while (stack.length && (heights[stack[stack.length - 1]] > heights[i] || i === n)) {
      const height = heights[stack.pop()]
      const width = stack.length ? i - stack[stack.length - 1] - 1 : i
      res = Math.max(height * width, res)
    }
    stack.push(i)
  }
  return res
}