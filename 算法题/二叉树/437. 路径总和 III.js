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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let res = 0
  const dfs = function (root, targetSum) {
    if (!root) return
    if (root.val === targetSum) res += 1
    dfs(root.left, targetSum - root.val)
    dfs(root.right, targetSum - root.val)
  }
  const reverse = function (root) {
    if (!root) return
    dfs(root, targetSum)
    reverse(root.left)
    reverse(root.right)
  }
  reverse(root)
  return res
}
