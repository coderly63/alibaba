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
  const dfs = function (root, path, target) {
    if (!root) return
    path.push(root.val)
    if (root.val === target && !root.left && !root.right) res.push([...path])
    dfs(root.left, path, target - root.val)
    dfs(root.right, path, target - root.val)
    path.pop()
  }
  dfs(root, [], targetSum)
  return res
};