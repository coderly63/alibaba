/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  const findMaxString = (num, len) => {
    const stack = []
    for (const n of num) {
      while (stack.length && stack[stack.length - 1] < n && len) {
        stack.pop()
        len -= 1
      }
      if (n !== 0 || stack.length) stack.push(n)
    }
    while (len--) stack.pop()
    return stack
  }
  const mergeMax = (nums1, nums2) => {
    const res = []
    while (nums1.length && nums2.length) {
      const l1 = nums1[0]
      const l2 = nums2[0]
      if (l1 > l2) {
        res.push(l1)
        nums1.shift()
      } else if (l2 > l1) {
        res.push(l2)
        nums2.shift()
      } else {
        let i = 0
        let j = 0
        while (
          nums1[i] === nums2[j] &&
          nums1[i] !== undefined &&
          nums2[j] !== undefined
        ) {
          i += 1
          j += 1
        }
        if (nums1[i] > nums2[j] || nums2[j] === undefined) {
          res.push(l1)
          nums1.shift()
        } else {
          res.push(l2)
          nums2.shift()
        }
      }
    }
    while (nums1.length) res.push(nums1.shift())
    while (nums2.length) res.push(nums2.shift())
    return res
  }
  let maxArr = []
  for (let i = 0; i <= nums1.length; i++) {
    let j = k - i
    if (j > nums2.length || j < 0) continue
    const arr1 = findMaxString(nums1, nums1.length - i)
    const arr2 = findMaxString(nums2, nums2.length - j)
    const arr = mergeMax(arr1, arr2)
    if (arr.join('') > maxArr.join('')) maxArr = arr
  }
  return maxArr
}
const nums1 = [3, 4, 6, 5]
const nums2 = [9, 1, 2, 5, 8, 3]
console.log(maxNumber(nums1, nums2, 5))
