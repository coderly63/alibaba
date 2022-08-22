/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const memo = new Array(amount + 1).fill(0)
  const dfs = function (n) {
    let res = -1
    if (n === 0) return 0
    if (n < 0) return -1
    if (memo[n]) return memo[n]
    for (const coin of coins) {
      const sub = dfs(n - coin)
      if (sub === -1) continue
      if (res === -1) res = sub + 1
      else res = Math.min(res, sub + 1)
    }
    memo[n] = res
    return res === -1 ? -1 : res
  }
  return dfs(amount)
};


var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
  dp[0] = 0
  for (let i = 0; i < dp.length; i++) {
    for (const coin of coins) {
      if (i - coin < 0) continue
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }
  console.log(dp);
  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount]
}
console.log(coinChange([2, 5, 7], 11));