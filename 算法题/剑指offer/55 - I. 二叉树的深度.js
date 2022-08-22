/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let res = 0
  if (!root) return res
  const queue = [root]
  while (queue.length) {
    const n = queue.length
    console.log(queue);
    for (let i = 0; i < n; i++) {
      const cur = queue.shift()
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }
    res += 1
  }
  return res
};

[1, 2, 3, 4, null, null, 5]