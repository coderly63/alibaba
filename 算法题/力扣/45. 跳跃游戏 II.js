/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const n = nums.length
  if (n === 1) return 0
  const dp = new Array(n).fill(Number.MAX_SAFE_INTEGER)
  for (let i = 0; i <= nums[0]; i++) dp[i] = 1
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (j + nums[j] < i) continue
      dp[i] = Math.min(dp[i], dp[j] + 1)
    }
  }
  return dp[n - 1]
}
const nums = [25, 3, 0, 1, 4]
console.log(jump(nums))
