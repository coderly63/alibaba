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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  if (!root) return
  if (!root.left) return
  else if (root.left && root.left.val < root.val) recoverTree(root.left)
  else {
    const t = root.val
    root.val = root.left.val
    root.left.val = t
  }
  if (!root.right) return
  else if (root.right && root.right.val > root.val) recoverTree(root.right)
  else {
    const t = root.val
    root.val = root.right.val
    root.right.val = t
  }
}
