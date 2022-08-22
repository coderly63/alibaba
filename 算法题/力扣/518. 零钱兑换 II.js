/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const dp = new Array(amount + 1).fill(0)
  dp[0] = 1
  for (const coin of coins) {
    for (let i = 0; i <= amount; i++) {
      if (i - coin < 0) continue
      dp[i] += dp[i - coin]
    }
  }
  console.log(dp);
  return dp[amount]
};

console.log(change(5, [1, 2, 5]));


var change = function (amount, coins) {
  const memo = new Array(amount + 1).fill(0).map(() => new Array(coins.length))
  const dfs = function (index, n) {
    let cnt = 0
    if (n === 0) return 1
    if (n < 0) return 0
    if (memo[n][index]) return memo[n][index]
    for (let i = index; i < coins.length; i++) {
      const coin = coins[i]
      const t = dfs(i, n - coin)
      cnt += t
    }
    memo[n][index] = cnt
    return cnt
  }
  return dfs(0, amount)
};
