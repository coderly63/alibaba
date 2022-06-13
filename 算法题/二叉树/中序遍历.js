function treeNode(val, left, right) {
  this.val = val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const func = (head) => {
  const stack = []
  const res = []
  const cur = head
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    const node = stack.pop()
    res.push(node.val)
    console.log(node.val);
    cur = cur.right
  }
}

let i = 3;
for (let j = i * 2 + 1; j < 50; j = j * 2 + 1) {
  console.log('i', i)
  console.log('j', j)
  i += 1
}