/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  const n = nums.length
  const bucket = t + 1
  const map = new Map()
  for (let i = 0; i < n; i++) {
    const id = Math.floor(nums[i] / bucket)
    console.log('before', id, map);
    if (i - k - 1 >= 0) map.delete(Math.floor(nums[i - k - 1] / bucket))
    if (map.has(id)) return true
    if (map.has(id - 1) && nums[i] - map.get(id - 1) <= t) return true
    if (map.has(id + 1) && map.get(id + 1) - nums[i] <= t) return true
    map.set(id, nums[i])
    console.log('after', id, map);
  }
  return false
};

console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3));