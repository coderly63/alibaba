function swap(arr, i, j) {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}
function reverseArray(arr, i, j) {
  while (i < j) {
    swap(arr, i++, j--)
  }
}
var nextPermutation = function (nums) {
  const n = nums.length
  let i = n - 2
  for (i; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      for (let j = n - 1; j > i; j--) {
        if (nums[j] > nums[i]) {
          swap(nums, i, j)
          reverseArray(nums, i + 1, n - 1)
          break
        }
      }
      break
    }
  }
  if (i < 0) return nums.reverse()
  return nums
}

var permute = function (nums) {
  const tmp = nums.join('')
  const res = [[...nums]]
  while (1) {
    const item = nextPermutation(nums)
    if (item.join('') === tmp) return res
    res.push([...item])
  }
  return res
}

console.log(permute([1, 2, 3]))
