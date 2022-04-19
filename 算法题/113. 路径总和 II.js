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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const res = [];
  const arr = [];
  const dfs = function (root, curSum) {
    if (!root) return;
    arr.push(root.val);
    const sum = curSum + root.val;
    if (sum === targetSum && !root.left && !root.right) {
      const tmp = [...arr];
      res.push(tmp);
    }
    if (root.left) {
      dfs(root.left, sum);
      arr.pop();
    }
    if (root.right) {
      dfs(root.right, sum);
      arr.pop();
    }
  };
  dfs(root, 0);
  return res;
};
