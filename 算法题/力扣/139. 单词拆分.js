var wordBreak = (s, wordDict) => {
  const set = new Set(wordDict)
  const n = s.length
  const memo = {}
  function dfs(start) {
    if (start === n) return true
    if (memo[start] !== undefined) return memo[start]
    for (let i = start + 1; i <= n; i++) {
      const sub = s.slice(start, i)
      if (set.has(sub) && dfs(i)) {
        memo[start] = true
        return true
      }
    }
    memo[start] = false
    return false
  }
  return dfs(0)
}

var wordBreak = (s, wordDict) => {
  const n = s.length
  const set = new Set(wordDict)
  const dp = new Array(n + 1).fill(false)
  dp[0] = true
  for (let i = 1; i <= n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      const sub = s.slice(j, i)
      if (set.has(sub) && dp[j]) dp[i] = true
    }
  }
  return dp[n]
}


wordBreak('applepenapple', ['apple', 'pen'])
