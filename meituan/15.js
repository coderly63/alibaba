const lines = read_line()
const n = parseInt(lines[0])
const m = parseInt(lines[1])
const id = parseInt(lines[2])
let cid = 1
const queue = []
let line
while ((line = read_line()) != '') {
  let arr = line.split(' ')
  const sum = arr.reduce((pre, cur) => pre + parseInt(cur), 0)
  queue.push({
    id: cid,
    val: sum,
  })
  cid += 1
}

queue.sort((a, b) => a.val > b.val)
for (let i = 0; i < queue.length; i++) {
  if (queue[i].id === id) {
    console.log(i);
  }
}