var formate = function (n) {
  let s = String(n)
  let s1 = '', s2 = '', s3 = ''
  if (s[0] === '-') {
    s1 = '-'
    s = s.slice(1)
  }
  s2 = s.split('.')[0]
  s3 = s.split('.')[1] ? '.' + s.split('.')[1] : ''
  const res = []
  let index = 0
  for (let i = s2.length - 1; i >= 0; i--) {
    res.push(s2[i])
    index += 1
    if (i !== s2.length - 1 && index % 3 === 0 && i !== 0) res.push(',')
  }
  console.log(s1 + res.reverse().join('') + s3);
}

// var formate = function (n) {
//   const s = String(n)
//   const res = s.replace(/^(-?)(\d*)(\.\d*)$/, (match, s1, s2, s3) => {
//     return s1 + s2.replace(/\d{1,3}(?=(\d{3})+$)/ig, '$&,') + s3
//   })
//   return res
// }

console.log(formate(-12323455.45667)) // 12,323.45`
