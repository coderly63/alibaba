<<<<<<< HEAD
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  
}
=======
function trap(height) {
  const n = height.length
  const stack = []
  let res = 0
  for (let i = 0; i < n; i++) {
    while (stack.length && height[stack[stack.length - 1]] < height[i]) {
      console.log(stack)
      const middle = stack.pop()
      const right = i
      if (!stack.length) break
      const left = stack[stack.length - 1]
      res +=
        (Math.min(height[left], height[right]) - height[middle]) *
        (right - left - 1)
    }
    stack.push(i)
  }
  return res
}

var trap2 = function (height) {
  let res = 0
  const n = height.length
  const leftMax = new Array(n).fill(0)
  leftMax[0] = height[0]
  const rightMax = new Array(n).fill(0)
  rightMax[n - 1] = height[n - 1]
  for (let i = 1; i < n; i++) leftMax[i] = Math.max(leftMax[i - 1], height[i])
  for (let i = n - 2; i >= 0; i--)
    rightMax[i] = Math.max(rightMax[i + 1], height[i])
  for (let i = 1; i < n - 1; i++) {
    const middle = height[i]
    const left = leftMax[i]
    const right = rightMax[i]
    res += Math.min(left, right) - middle
  }
  return res
}

console.log(trap2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
>>>>>>> 5e0632814e90ee814423ca00c0b1d7f63a910fd8
