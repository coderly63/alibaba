/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length
  const n = word2.length
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1))
  dp[0][0] = 0
  for (let i = 1; i <= n; i++) dp[0][i] = dp[0][i - 1] + 1
  for (let i = 1; i <= m; i++) dp[i][0] = dp[i - 1][0] + 1
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1]
      else dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1
    }
  }
  return dp[m][n]
};

console.log(minDistance('horse', 'ros'));