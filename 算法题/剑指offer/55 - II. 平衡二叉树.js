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
var isBalanced = function (root) {
  const dfs = function (root) {
    if (!root) return 0
    const left = dfs(root.left)
    const right = dfs(root.right)
    if (right === -1 || left === -1 || Math.abs(left - right) > 1) return -1
    return Math.max(left, right) + 1
  }
  return dfs(root) !== -1
};