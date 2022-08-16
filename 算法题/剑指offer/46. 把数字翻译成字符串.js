/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  const arr = String(num)
  const n = arr.length
  const dp = new Array(n + 1)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    const cur = Number(arr[i - 2] + arr[i - 1])
    if (cur >= 10 && cur <= 25) dp[i] = dp[i - 1] + dp[i - 2]
    else dp[i] = dp[i - 1]
  }
  console.log(dp);
  return dp[n]
};
console.log(translateNum(12258));