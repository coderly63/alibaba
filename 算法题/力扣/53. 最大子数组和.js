/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const n = nums.length
  let res = nums[0]
  let sum = nums[0]
  for (let i = 1; i < n; i++) {
    if (sum + nums[i] < nums[i]) sum = nums[i]
    else sum += nums[i]
    res = Math.max(sum, res)
  }
  return res
};