/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return []
  const dfs = function (start, end) {
    const res = []
    if (start > end) return [null]
    for (let i = start; i <= end; i++) {
      const left = dfs(start, i - 1)
      const right = dfs(i + 1, end)
      for (const l of left) {
        for (const r of right) {
          const root = new TreeNode(i, l, r)
          res.push(root)
        }
      }
    }
    return res
  }
  return dfs(1, n)
}
