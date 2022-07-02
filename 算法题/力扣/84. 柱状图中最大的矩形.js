/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const stack = []
  let res = 0
  for (let i = 0; i <= heights.length; i++) {
    while (
      stack.length &&
      (heights[i] < heights[stack[stack.length - 1]] || i === heights.length)
    ) {
      const height = heights[stack.pop()]
      const width = stack.length > 0 ? i - stack[stack.length - 1] - 1 : i
      res = Math.max(res, height * width)
    }
    stack.push(i)
  }
  return res
}
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
