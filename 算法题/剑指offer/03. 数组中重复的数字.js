/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let i = 0
  while (i < nums.length) {
    const index = nums[i]
    console.log(nums);
    if (index < 0) i++
    else if (nums[index] >= 0) {
      nums[i] = nums[index]
      nums[index] = -1
    } else if (nums[index] < 0) {
      return index
    }
  }
}

console.log(findRepeatNumber([0, 1, 2, 1, 3]))
