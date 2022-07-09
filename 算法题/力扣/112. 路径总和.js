/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false
  if (!root.left && !root.right) return root.val === targetSum
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  )
}

var hasPathSum = function (root, targetSum) {
  if (!root) return false
  const nodeStack = [root]
  const targetStack = [targetSum]
  while (nodeStack.length) {
    const cur = nodeStack.shift()
    const target = targetStack.shift()
    if (!cur.left && !cur.right && cur.val === target) return true
    if (cur.left) {
      nodeStack.push(cur.left)
      targetStack.push(target - cur.val)
    }
    if (cur.right) {
      nodeStack.push(cur.right)
      targetStack.push(target - cur.val)
    }
  }
  return false
}