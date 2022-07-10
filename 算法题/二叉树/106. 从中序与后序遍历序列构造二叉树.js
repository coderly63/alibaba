/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) return null
  const rootVal = postorder[postorder.length - 1]
  let i = 0
  while (inorder[i] !== rootVal) i++
  const left = buildTree(inorder.slice(0, i), postorder.slice(0, i))
  const right = buildTree(inorder.slice(i + 1), postorder.slice(i, postorder.length - 1))
  return new TreeNode(rootVal, left, right)
}
