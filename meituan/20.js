const t = Math.pow(10, 9) + 7
function getTreeSum(tree) {
  if (!tree) return 0
  const left = getTreeSum(tree.left)
  const right = getTreeSum(tree.right)
  const res = Math.max(left, right) * 2 + (tree.val === 0 ? 1 : tree.val)
  return res % t
}