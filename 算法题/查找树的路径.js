const tree = [
  {
    id: 1,
    children: [{ id: 2 }, { id: 3 }],
  },
  {
    id: 5,
    children: [{ id: 6 }, { id: 7, children: [{ id: 10 }] }],
  },
]

function findTarget(tree, target) {
  let res = []
  function dfs(tree, target, path) {
    if (!tree) return
    for (const node of tree) {
      if (node.id === target) {
        res = [...path, node.id]
        return
      } else {
        path.push(node.id)
        dfs(node.children, target, path)
        path.pop()
      }
    }
  }
  dfs(tree, target, [])
  return res
}

console.log(findTarget(tree, 3))
