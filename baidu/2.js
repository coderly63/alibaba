const n = parseInt(readline())
for (let i = 0; i < n; i++) {
  const s = readline()
  let n1 = 0,
    n2 = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') n1 += 1
    else n2 += 1
  }
  if (n1 === 0 || n2 === 0) {
    console.log('Yes')
    continue
  }
  if (n1 % 2 === 0 || n2 % 2 === 0) console.log('Yes')
  else console.log('No')
}
