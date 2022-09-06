/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const n = nums.length
  let i = 0
  while (i < n) {
    if (nums[i] <= 0) {
      i += 1
      continue
    }
    while (nums[i] > 0 && nums[i] <= n && nums[i] - 1 !== i && nums[i] !== nums[nums[i] - 1]) {
      const index = nums[i] - 1
      const tmp = nums[i]
      nums[i] = nums[index]
      nums[index] = tmp
    }
    i += 1
  }
  console.log(nums);
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) return i + 1
  }
  return n + 1
};

console.log(firstMissingPositive([1]));