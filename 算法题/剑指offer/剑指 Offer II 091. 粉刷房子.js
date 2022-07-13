/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  const n = costs.length
  const dp = new Array(n).fill(0).map(() => new Array(3))
  // dp[i][j]表示第i个房子选第j个颜色时的最小cost 0<=j<=2
  for (let j = 0; j < 3; j++) {
    dp[0][j] = costs[0][j]
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < 3; j++) {
      dp[i][j] = Math.min(dp[i - 1][(j + 1) % 3], dp[i - 1][(j + 2) % 3]) + costs[i][j]
    }
  }
  return Math.min(dp[n-1][0], Math.min(dp[n-1][1]), dp[n-1][2])
}

const costs = [[7,6,2]]
console.log(minCost(costs));
