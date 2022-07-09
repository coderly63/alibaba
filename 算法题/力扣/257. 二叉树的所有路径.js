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
 * @return {string[]}
 */
// 递归
var binaryTreePaths = function (root) {
  const res = []
  if (!root) return res
  const dfs = function (root, path) {
    if (!root.left && !root.right) res.push(path)
    root.left && dfs(root.left, path + '->' + root.left.val)
    root.right && dfs(root.right, path + '->' + root.right.val)
  }
  dfs(root, root.val + '')
  return res
}

// 非递归
const binaryTreePaths = function (root) {
  const res = []
  if (!root) return res
  const nodeStack = [root]
  const pathStack = [root.val + '']
  while (nodeStack.length) {
    const cur = nodeStack.shift()
    const path = pathStack.shift()
    if (!cur.left && !cur.right) res.push(path)
    if (cur.left) {
      nodeStack.push(cur.left)
      pathStack.push(path + '->' + cur.left.val)
    }
    if (cur.right) {
      nodeStack.push(cur.right)
      pathStack.push(path + '->' + cur.right.val)
    }
  }
  return res
}
