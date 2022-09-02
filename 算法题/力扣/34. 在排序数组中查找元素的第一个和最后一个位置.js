/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const n = nums.length
  if (!nums.includes(target)) return [-1, -1]
  let l = 0, r = n - 1
  const res = []
  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    if (nums[mid] <= target) l = mid + 1
    else r = mid - 1
  }
  res.push(r)
  l = 0, r = n - 1
  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    if (nums[mid] >= target) r = mid - 1
    else l = mid + 1
  }
  res.unshift(l)
  return res
};