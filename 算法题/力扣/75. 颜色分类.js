/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const n = nums.length
  let p0 = 0,
    p2 = n - 1
  for (let i = 0; i <= p2; i++) {
    while (i <= p2 && nums[i] === 2) swap(nums, i, p2--)
    if (nums[i] === 0) swap(nums, i, p0++)
  }
  return nums
}
function swap(arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

console.log(sortColors([2]))
