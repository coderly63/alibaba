/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const n = nums.length
  if (n <= 1) return n
  nums = nums.sort((a, b) => a - b)
  let res = 1, t = 1
  for (let i = 1; i < n; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      t += 1
      res = Math.max(res, t)
    } else if (nums[i] !== nums[i - 1]) t = 1
  }
  return res
}

console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));