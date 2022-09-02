function dfs(p, q) {
  if (!q) return true
  if (!p) return false
  return p.val === q.val && dfs(p.left, q.left) && dfs(p.right, q.right)
}
var isSubStructure = function (A, B) {
  if (!B || !A) return false
  return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
}