var isValidBST = function (root) {
  const dfs = (root, low, high) => {
    if (!root) return true
    if (root.val <= low || root.val >= high) return false
    return dfs(root.left, low, root.val) && dfs(root.right, root.val, high)
  }
  return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
};
