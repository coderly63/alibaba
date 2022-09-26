/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const n = nums.length
  const dp = new Array(n).fill(1)
  let res = 1
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1)
    }
    res = Math.max(res, dp[i])
  }
  return res
}

var lengthOfLIS = function (nums) {
  const n = nums.length
  const dp = new Array(n).fill(0)
  let res = 0
  const tails = new Array(n)
  for (const num of nums) {
    let i = 0,
      j = res
    while (i < j) {
      const mid = Math.floor((i + j) / 2)
      if (tails[mid] < num) i = mid + 1
      else j = mid
    }
    tails[i] = num
    if (i === res) res += 1
  }
  return res
}

console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]))
