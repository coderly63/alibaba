/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const n = nums.length
  const res = []
  const maxStack = []
  for (let i = 0; i < k && i < n; i++) {
    while (maxStack.length && maxStack[maxStack.length - 1] < nums[i]) maxStack.pop()
    maxStack.push(nums[i])
  }
  res.push(maxStack[0])
  if (n <= k) return res
  for (let i = k; i < n; i++) {
    if (maxStack[0] === nums[i - k]) maxStack.shift()
    while (maxStack.length && maxStack[maxStack.length - 1] < nums[i]) maxStack.pop()
    maxStack.push(nums[i])
    res.push(maxStack[0])
  }
  return res
};

const arr = [8, 7, 6, 5, 4, 3, 2]
console.log(maxSlidingWindow(arr, 3));