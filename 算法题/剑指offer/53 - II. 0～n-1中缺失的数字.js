/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length
  let l = 0, r = n - 1
  while (l < r) {
    const mid = (l + r) >> 1
    if (nums[mid] === mid) l = mid + 1
    else r = mid - 1
  }
  if (nums[l] === l) return nums[l] + 1
  else return nums[l] - 1
};

console.log(missingNumber([0, 1, 2]));