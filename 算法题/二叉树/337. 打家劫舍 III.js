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
var rob = function (root) {
  const dfs = function (root) {
    const res = new Array(2).fill(0)
    if (!root) return res
    const left = dfs(root.left)
    const right = dfs(root.right)
    res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    res[1] = left[0] + right[0] + root.val
    return res 
  }
  const res = dfs(root)
  return Math.max(res[0], res[1])
}
