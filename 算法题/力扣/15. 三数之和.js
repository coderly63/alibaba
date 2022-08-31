/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const n = nums.length
  const res = []
  if (n < 3) return res
  nums.sort((a, b) => a - b)
  for (let i = 0; i <= n - 3; i++) {
    if (nums[i] === nums[i - 1]) continue
    let l = i + 1, r = n - 1
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] === nums[l + 1]) l++
        while (l < r && nums[r] === nums[r - 1]) r--
        l++
        r--
      }
      else if (sum < 0) l++
      else r--
    }
  }
  return res
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));