/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  return quickSort(nums, 0, nums.length - 1).join('')
};
function quickSort(arr, left, right) {
  if (left >= right) return arr
  const index = partition(arr, left, right)
  quickSort(arr, left, index - 1)
  quickSort(arr, index + 1, right)
  return arr
}
function partition(arr, left, right) {
  const pivot = left
  let index = pivot
  for (let i = left + 1; i <= right; i++) {
    if (compare(arr[i], arr[pivot])) {
      index += 1
      swap(arr, index, i)
    }
  }
  swap(arr, index, pivot)
  return index
}
function swap(arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}
function compare(i, j) {
  return `${i}${j}` - `${j}${i}` < 0 ? true : false
}

console.log(minNumber([3, 30, 34, 9, 5]));