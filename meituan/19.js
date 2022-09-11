function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function getBinaryTrees(preOrder, inOrder) {
  const res = []
  const n = preOrder.length
  if (n <= 0) return [null]
  const rootVal = preOrder[0]
  for (let i = 0; i < n; i++) {
    if (rootVal !== inOrder[i]) continue
    const left = getBinaryTrees(preOrder.slice(1, i + 1), inOrder.slice(0, i))
    const right = getBinaryTrees(preOrder.slice(i + 1), inOrder.slice(i + 1))
    console.log(rootVal, i, inOrder[i]);
    for (const l of left) {
      for (const r of right) {
        const root = new TreeNode(rootVal)
        root.left = l
        root.right = r
        res.push(root)
      }
    }
  }
  return res
}

console.log(getBinaryTrees([1, 1, 2], [1, 2, 1]));