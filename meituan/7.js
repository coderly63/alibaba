function foo(s1) {
  const n = s1.length
  if (n <= 1) return n
  const s2 = s1.split('').reverse().join('')
  const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0))
  for (let i = 1; i <= n; i++) {
    const c1 = s1[i - 1]
    for (let j = 1; j <= n; j++) {
      const c2 = s2[j - 1]
      if (c1 === c2) dp[i][j] = dp[i - 1][j - 1] + 1
      else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[n][n]
}
function dfs(s) {
  const n = s.length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const arr = s.substr()
    }
  }
}

console.log(foo('cbcbacabb')); // acba
