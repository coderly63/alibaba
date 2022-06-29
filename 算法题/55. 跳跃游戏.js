/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const n = nums.length
  let maxLength = nums[0]
  for (let i = 0; i < n; i++) {
    if (maxLength >= i) maxLength = Math.max(maxLength, nums[i] + i)
    else return false
  }
  return true
}
