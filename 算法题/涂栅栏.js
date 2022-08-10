function foo(s) {
  const n = s.length
  const left0 = new Array(n)
  const right1 = new Array(n)
  const left1 = new Array(n)
  const right0 = new Array(n)
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      left0[i] = s[0] === '0' ? 1 : 0
      left1[i] = s[0] === '1' ? 1 : 0
      right0[n - i - 1] = s[n - i - 1] === '0' ? 1 : 0
      right1[n - i - 1] = s[n - i - 1] === '1' ? 1 : 0
    } else {
      left0[i] = left0[i - 1] + (s[i - 1] === '0' ? 1 : 0)
      left1[i] = left1[i - 1] + (s[i - 1] === '1' ? 1 : 0)
      right0[n - i - 1] = right0[n - i] + (s[n - i - 1] === '0' ? 1 : 0)
      right1[n - i - 1] = right1[n - i] + (s[n - i - 1] === '1' ? 1 : 0)
    }
  }
}

foo('01011')
