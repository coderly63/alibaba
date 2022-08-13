/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let res = 0
  const dfs = function (i, product, sum) {
    if (i >= n) return
    if (sum > n) return
    if (sum === n) return (res = Math.max(res, product))
    dfs(i, product * i, sum + i)
    dfs(i + 1, product, sum)
  }
  dfs(1, 1, 0)
  return res
}

var integerBreak = function (n) {
  const dp = []
  for (let i = 0; i < n; i++) {
    
  }
}



console.log(integerBreak(2));