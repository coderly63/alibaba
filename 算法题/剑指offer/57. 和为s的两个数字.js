/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const n = nums.length
  let left = 0, right = n - 1
  const res = []
  while (left < right) {
    const l = nums[left]
    const r = nums[right]
    if (l + r === target) {
      res.push(l, r)
      return res
    }
    else if (l + r < target) left += 1
    else right -= 1
  }
  return res
};

console.log(twoSum([2, 7, 11, 15], 9));