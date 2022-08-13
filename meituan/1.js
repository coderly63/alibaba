var line
var a, n
var foo = (a, b) => {
  let res = 0
  const n = Math.max(a, b)
  for (let i = 0; i < n; i++) {
    if ((a <= 1 && b <= 1) || a <= 0 || b <= 0) return res
    if (a > b) {
      a -= 2
      b -= 1
    } else {
      a -= 1
      b -= 2
    }
    res += 1
  }
}
while ((a = readInt())) {
  n = a
}
while ((line = read_line()) != '') {
  let arr = line.split(' ')
  let a = parseInt(arr[0])
  let b = parseInt(arr[1])
  let c = foo(a, b)
  console.log(c)
}
