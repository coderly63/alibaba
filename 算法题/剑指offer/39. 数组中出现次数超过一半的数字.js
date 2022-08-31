/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let i = 0
  while (i < nums.length) {
    const index = nums[i] - 1
    if (index < 0) {
      i += 1
      continue
    }
    if (nums[index] > 0) {
      nums[i] = nums[index]
      nums[index] = -1
    } else {
      nums[index] -= 1
      nums[i++] = 0
    }
  }
  console.log(nums);
};

majorityElement([2, 2, 4, 4, 4])