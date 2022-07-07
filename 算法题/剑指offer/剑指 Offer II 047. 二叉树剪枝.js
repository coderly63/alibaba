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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  if (!root) return root
  const checkTreeDelete = function (root) {
    if (
      !root ||
      (root.val === 0 &&
        checkTreeDelete(root.left) &&
        checkTreeDelete(root.right))
    )
      return true
    else return false
  }
}
