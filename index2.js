let n
while ((a = readInt()) != null) {
  n = a
}
const leftr = new Array(n)
const rightr = new Array(n)
const leftb = new Array(n)
const rightb = new Array(n)
let s
let res = Number.MAX_SAFE_INTEGER
while ((s = read_line()) != '') {
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      leftr[i] = s[i] === 'r' ? 1 : 0
      leftb[i] = s[i] === 'b' ? 1 : 0
      rightr[i] = s[n - i - 1] === 'r' ? 1 : 0
      rightb[i] = s[n - i - 1] === 'b' ? 1 : 0
    } else {
      leftr[i] = leftr[i - 1] + (s[i] === 'r' ? 1 : 0)
      leftb[i] = leftb[i - 1] + (s[i] === 'b' ? 1 : 0)
      rightr[i] = rightr[n - i] + (s[n - i - 1] === 'r' ? 1 : 0)
      rightb[i] = rightb[n - i] + (s[n - i - 1] === 'b' ? 1 : 0)
    }
  }
  for (let i = 0; i < n; i++) {
    res = Math.min(
      leftr[i] + rightb[n - i - 1] - 1,
      leftb[i] + rightr[n - i - 1] - 1
    )
  }
  console.log(res)
}
console.log('master在index2.js增加一行用于测试')
