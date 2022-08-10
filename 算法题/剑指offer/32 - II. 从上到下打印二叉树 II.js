/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = []
  if (!root) return res
  const queue = [root]
  while (queue.length) {
    const tmp = []
    const n = queue.length
    for (let i = 0; i < n; i++) {
      const cur = queue.shift()
      tmp.push(cur.val)
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }
    res.push(tmp)
  }
  return res
}
