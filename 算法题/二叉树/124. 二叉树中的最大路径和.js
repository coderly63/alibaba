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
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = root.val
  const dfs = function (root) {
    if (!root) return 0
    const left = dfs(root.left)
    const right = dfs(root.right)
    const sum = left + right + root.val
    max = Math.max(max, sum)
    const maxMargin = root.val + Math.max(left, right, 0)
    return maxMargin > 0 ? maxMargin : 0
  }
  dfs(root)
  return max
}
