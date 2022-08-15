var pathSum = function (root, target) {
  const res = []
  const dfs = function (root, target, path) {
    if (!root) return res
    path.push(root.val)
    if (!root.left && !root.right && target === root.val) res.push([...path])
    dfs(root.left, target - root.val, path)
    dfs(root.right, target - root.val, path)
    path.pop()
  }
  dfs(root, target, [])
  return res
}
