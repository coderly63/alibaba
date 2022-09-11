/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length
  const stack = []
  let res = 0
  for (let i = 0; i < n; i++) {
    while (stack.length && height[stack[stack.length - 1]] < height[i]) {
      const mid = stack.pop()
      const r = i
      if (!stack.length) break
      const l = stack[stack.length - 1]
      res += (Math.min(height[l], height[r]) - height[mid]) * (r - l - 1)
    }
    stack.push(i)
  }
  return res
};