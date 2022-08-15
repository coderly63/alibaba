function rightView(root) {
  const queue = [root]
  const res = []
  while (queue.length) {
    const n = queue.length
    for (let i = 0; i < n; i++) {
      const cur = queue.shift()
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
      if (i === n - 1) res.push(cur.val)
    }
  }
  return res
}
