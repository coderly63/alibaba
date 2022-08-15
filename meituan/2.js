function foo(f, b) {
  let res = -1
  const n = f.length
  const edge = Math.ceil(n / 2)
  const dpf = new Array(10).fill(0)
  const dpb = new Array(10).fill(0)
  for (let i = 0; i < n; i++) {
    dpf[f[i]] += 1
    if (dpf[f[i]] >= edge) return 0
    if (f[i] !== b[i]) dpb[b[i]] += 1
  }
  for (let i = 0; i < 100007; i++) {
    if (dpf[i] + dpb[i] >= edge) {
      if (res === -1) res = edge - dpf[i]
      else res = Math.min(res, edge - dpf[i])
    }
  }
  return res
}
// let t = 0
// let f, b
// var line
// while ((line = read_line()) != '') {
//   if (t === 1) f = line.split(' ').map((num) => parseInt(num))
//   if (t === 2) b = line.split(' ').map((num) => parseInt(num))
//   t += 1
// }
// const res = foo(f, b)
// console.log(res)

console.log(foo([1, 2, 4, 4, 5, 6], [4, 4, 3, 4, 5, 4]));
