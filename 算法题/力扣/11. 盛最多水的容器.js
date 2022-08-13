/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const n = height.length
  let left = 0
  let right = n - 1
  let res = 0
  while (left < right) {
    const x = right - left
    const y = Math.min(height[left], height[right])
    res = Math.max(x * y, res)
    if (height[left] < height[right]) left++
    else right--
  }
  return res
}
