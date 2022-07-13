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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null
  if (key > root.val) root.right = deleteNode(root.right, key)
  else if (key < root.val) root.left = deleteNode(root.left, key)
  else {
    if (!root.right && !root.left) root = null
    else if (!root.right) root = root.left
    else if (!root.left) root = root.right
    else {
      let node = root.right
      let pre = root
      while (node.left) {
        pre = node
        node = node.left
      }
      root.val = node.val
      if (pre.left.val === root.val) pre.left = node.right
      else pre.right = node.right
    }
  }
  return root
}
