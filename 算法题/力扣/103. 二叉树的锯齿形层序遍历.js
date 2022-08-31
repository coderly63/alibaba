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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const res = []
  if (!root) return res
  const queue = [root]
  let flag = true
  while (queue.length) {
    const n = queue.length
    const ans = []
    for (let i = 0; i < n; i++) {
      const cur = queue.shift()
      ans.push(cur.val)
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }
    if (flag) res.push(ans)
    else res.push(ans.reverse())
    flag = !flag
  }
  return res
};