/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length
  const dp = new Array(n).fill(0).map(() => new Array(2).fill(0).map(() => new Array(3).fill(Number.MIN_SAFE_INTEGER)))
  dp[0][1][0] = -prices[0]
  dp[0][0][0] = 0
  for (let i = 1; i < n; i++) {
    dp[i][0][1] = Math.max(dp[i - 1][0][1], dp[i - 1][1][0] + prices[i])
    dp[i][1][0] = Math.max(dp[i - 1][1][0], - prices[i])
    dp[i][1][1] = Math.max(dp[i - 1][1][1], dp[i - 1][0][1] - prices[i])
    dp[i][0][2] = Math.max(dp[i - 1][0][2], dp[i - 1][1][1] + prices[i])
  }
  console.log(dp);
  return Math.max(dp[n - 1][0][2], dp[n - 1][0][1], 0)
};

var maxProfit = function (prices) {
  const n = prices.length
  let buy1 = -prices[0], buy2 = -prices[0]
  let sell1 = 0, sell2 = 0
  for (let i = 0; i < n; i++) {
    buy1 = Math.max(buy1, -prices[i])
    sell1 = Math.max(sell1, buy1 + prices[i])
    buy2 = Math.max(buy2, sell1 - prices[i])
    sell2 = Math.max(sell2, buy2 + prices[i])
  } 
  return Math.max(sell1, sell2)
}

console.log(maxProfit([7, 6, 4, 3, 1]));