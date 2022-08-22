/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  const res = []
  const dfs = function (root) {
    if (!root) return
    dfs(root.left)
    res.push(root.val)
    dfs(root.right)
  }
  dfs(root)
  const n = res.length
  return res[n - k]
};
