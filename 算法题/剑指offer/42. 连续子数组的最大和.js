/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const n = nums.length
  let res = nums[0]
  let sum = 0
  for (let i = 0; i < n; i++) {
    if (sum + nums[i] < nums[i]) sum = nums[i]
    else sum += nums[i]
    res = Math.max(res, sum)
  }
  return res
};