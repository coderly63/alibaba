function minOperations(str) {
  const n = str.length
  const dp = new Array(26).fill(0)
  let res = 0
  for (const c of str) {
    dp[c.charCodeAt() - 'a'.charCodeAt()] += 1
  }
  let t = 1
  while (t) {
    t = 0
    for (let i = 0; i < 26; i++) {
      if (dp[i] > 1) {
        t = 1
        dp[i] -= 2
        break
      }
    }
    if (!t) break
    let idx = 0
    for (let i = 0; i < 26; i++) {
      if (dp[i] < dp[idx]) idx = i
    }
    res += 1
    dp[idx] += 1
  }
  return res
}