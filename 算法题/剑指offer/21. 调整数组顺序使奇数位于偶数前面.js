/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let l = 0, r = nums.length - 1
  while (1) {
    while (nums[l] % 2 === 1) l++
    while (nums[r] % 2 === 0) r--
    if (l < r) swap(nums, l, r)
    else break
  }
return nums
};
function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j]
  arr[j] = arr[i] ^ arr[j]
  arr[i] = arr[i] ^ arr[j]
}

exchange([1, 2, 3, 4])