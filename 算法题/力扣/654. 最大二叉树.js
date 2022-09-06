/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (!nums.length) return null
  const { maxIdx, maxVal } = findMax(nums)
  const left = constructMaximumBinaryTree(nums.slice(0, maxIdx))
  const right = constructMaximumBinaryTree(nums.slice(maxIdx + 1))
  return new TreeNode(maxVal, left, right)
}

function findMax(arr) {
  let maxVal = Number.MIN_SAFE_INTEGER
  let maxIdx = -1
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    if (num > maxVal) {
      maxVal = num
      maxIdx = i
    }
  }
  return {
    maxIdx,
    maxVal
  }
}