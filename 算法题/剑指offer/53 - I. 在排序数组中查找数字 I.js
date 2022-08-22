/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const n = nums.length
  let i = 0; j = n - 1
  let left = 0, right = 0
  while (i <= j) {
    const mid = (i + j) >> 1
    if (nums[mid] < target) i = mid + 1
    else j = mid - 1
  }
  left = i
  i = 0, j = n - 1
  while (i <= j) {
    const mid = (i + j) >> 1
    if (nums[mid] <= target) i = mid + 1
    else j = mid - 1
  }
  right = j
  return right - left + 1
};

search([5, 7, 7, 8, 8, 10], 8)