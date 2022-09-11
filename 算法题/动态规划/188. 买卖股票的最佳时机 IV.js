/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (K, prices) {
  const n = prices.length
  const dp = new Array(K + 1)
  for (let k = 0; k <= K; k++) {
    dp[k] = {
      buy: -prices[0],
      sell: 0,
    }
  }
  for (let i = 0; i < n; i++) {
    for (let k = 1; k <= K; k++) {
      dp[k].sell = Math.max(dp[k].buy + prices[i], dp[k].sell)
      dp[k].buy = Math.max(dp[k - 1].sell - prices[i], dp[k].buy)
    }
  }
  return dp[K].sell
};

console.log(maxProfit(2, [3, 2, 6, 5, 0, 3]));