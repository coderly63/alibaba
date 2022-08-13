/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
function dfs(p, q) {
  if (!q) return true
  if (!p || p.val !== q.val) return false
  return dfs(p.left, q.left) && dfs(p.right, q.right)
}
var isSubStructure = function (A, B) {
  if (!B || !A) return false
  return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
}
