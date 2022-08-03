/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var dfs = function (left, right) {
  if (!left && !right) return true
  if (!left || !right || left.val !== right.val) return false
  return dfs(left.left, right.right) && dfs(left.right, right.left)
}
var isSymmetric = function (root) {
  if (!root) return true
  return dfs(root.left, root.right)
}
