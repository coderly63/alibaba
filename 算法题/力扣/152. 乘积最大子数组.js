/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let res = Number.MIN_SAFE_INTEGER
  let min = 1,
    max = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      max = min + max
      min = max - min
      max = max - min
    }
    max = Math.max(nums[i] * max, nums[i])
    console.log('maxProduct ~ max', max)
    min = Math.min(nums[i] * min, nums[i])
    console.log('maxProduct ~ min', min)
    res = Math.max(max, res)
  }
  return res
}

console.log(maxProduct([2, 3, -2, 4, -3]))
