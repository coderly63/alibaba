// const s = ['flower', 'flow', 'flight']
const s = read_line().split(' ')
let result = ''
let [a, ...b] = s
for (let i in a) {
  let f = b.every((arr) => arr[i] === a[i])
  if (f) result += a[i]
  else break
}
console.log(result)
