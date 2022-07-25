/**
 * @param {number[]} prices
 * @return {number}
 */
// 单调栈
var maxProfit = function (prices) {
  const stack = []
  let res = 0
  for (const price of prices) {
    while (stack.length && stack[stack.length - 1] > price) stack.pop()
    stack.push(price)
    res = Math.max(res, price - stack[0])
  }
  return res
};


// dp
var maxProfit = function (prices, fee) {
  const n = prices.length
  const dp = new Array(n).fill(0).map(() => new Array(2))
  dp[0][0] = 0
  dp[0][1] = -prices[0]
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }
  return Math.max(dp[n - 1][0])
};

const prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices));