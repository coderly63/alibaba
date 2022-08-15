function TreeNode(val, left, right) {
  this.val = val
  this.left = left || null
  this.right = right || null
}
function getPostOrderOfTree(preStr, midStr) {
  const buildTree = function (preStr, midStr) {
    if (!preStr.length) return null
    const rootVal = preStr[0]
    const mid = midStr.indexOf(rootVal)
    const root = new TreeNode(rootVal)
    root.left = buildTree(preStr.slice(1, mid + 1), midStr.slice(0, mid))
    root.right = buildTree(preStr.slice(mid + 1), midStr.slice(mid + 1))
    return root
  }
  const root = buildTree(preStr.split(''), midStr.split(''))
  const res = []
  const postorderTree = function (root) {
    if (!root) return
    postorderTree(root.left)
    postorderTree(root.right)
    res.push(root.val)
  }
  postorderTree(root)
  return res.join('')
}

console.log(getPostOrderOfTree("ACDEFHGB", "DECAHFBG"));