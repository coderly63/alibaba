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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const res = []
  if (!root) return res
  const dfs = function (root, target, path) {
    if (!root) return
    if (!root.left && !root.right && target === root.val) res.push([...path])
    if (root.left) {
      path.push(root.left.val)
      dfs(root.left, target - root.val, path)
      path.pop()
    }
    if (root.right) {
      path.push(root.right.val)
      dfs(root.right, target - root.val, path)
      path.pop()
    }
  }
  dfs(root, targetSum, [root.val])
  return res
}
