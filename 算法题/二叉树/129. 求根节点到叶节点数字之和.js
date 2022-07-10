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
var sumNumbers = function (root) {
  let res = 0
  const dfs = function (root, path) {
    if (!root) return
    path.push(root.val)
    if (!root.left && !root.right) res += Number(path.join(''))
    dfs(root.left, path)
    dfs(root.right, path)
    path.pop()
  }
  dfs(root, [])
  return res
}
