/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = []
  const dfs = function (index, n, path) {
    if (path.length === k && n === 0) {
      res.push([...path])
      return
    }
    if (path.length > k) return
    for (let i = index; i <= 9; i++) {
      path.push(i)
      dfs(i + 1, n - i, path)
      path.pop()
    }
  }
  dfs(1, n, [])
  return res
};

console.log(combinationSum3(3, 7));