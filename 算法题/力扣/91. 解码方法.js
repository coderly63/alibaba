/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === '0') return 0
  const n = s.length
  const dp = new Array(n + 1)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    const c = s[i - 2] + s[i - 1]
    if (s[i - 1] === '0' && s[i - 2] !== '1' && s[i - 2] !== '2') return 0
    else if (s[i - 1] === '0') dp[i] = dp[i - 2]
    else if (c >= '1' && c <= '26') dp[i] = dp[i - 2] + dp[i - 1]
    else dp[i] = dp[i - 1]
  }
  console.log(dp);
  return dp[n]
};

console.log(numDecodings('12'));