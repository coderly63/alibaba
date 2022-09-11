/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const dp = new Array(9).fill(0).map((val, i) => i + 1)
  const res = []
  const dfs = function (dp, path, n, k, index) {
    if (n === 0 && path.length === k) return res.push([...path])
    else if (path.length > k || n < 0) return
    for (let i = index; i < dp.length; i++) {
      path.push(dp[i])
      dfs(dp, path, n - dp[i], k, i + 1)
      path.pop()
    }
  }
  dfs(dp, [], n, k, 0)
  return res
};

console.log(combinationSum3(3, 9));