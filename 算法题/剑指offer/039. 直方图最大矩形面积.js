/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const n = heights.length
  const stack = []
  let res = 0
  for (let i = 0; i <= n; i++) {
    while (stack.length && (heights[stack[stack.length - 1]] > heights[i] || i === n)) {
      const height = heights[stack.pop()]
      const width = stack.length > 0 ? i - stack[stack.length - 1] - 1 : i
      res = Math.max(res, width * height)
    }
    stack.push(i)
  }
  return res
};

largestRectangleArea([2, 1, 5, 6, 2, 3])