var isSymmetric = function (root) {
  function check(p, q) {
    if (!p && !q) return true
    else if (!p || !q) return false
    return p.val === q.val && check(p.left, q.right) && check(p.right && q.left)
  }
  return check(root, root)
};
