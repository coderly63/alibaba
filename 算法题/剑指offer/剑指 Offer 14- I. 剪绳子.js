/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  const dp = new Array(n + 1).fill(0)
  dp[2] = 1
  for (let i = 3; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j)
    }
  }
  console.log(dp)
}

cuttingRope(10)
