/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const dp = new Array(n)
  dp[0] = 1
  let a = 0, b = 0, c = 0
  for (let i = 1; i < n; i++) {
    const n2 = dp[a] * 2
    const n3 = dp[b] * 3
    const n5 = dp[c] * 5
    dp[i] = Math.min(n2, n3, n5)
    if (dp[i] === n2) a++
    if (dp[i] === n3) b++
    if (dp[i] === n5) c++
  }
  console.log(dp);
  return dp[n - 1]
};

// 1, 2, 3, 4, 5, 6, 8, 9, 10, 12

console.log(nthUglyNumber(10));