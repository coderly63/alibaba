/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = []
  const dfs = function (l, r, path) {
    if (!l && !r) res.push(path)
    if (l > r) return
    if (l) dfs(l - 1, r, path + '(')
    if (r) dfs(l, r - 1, path + ')')
  }
  dfs(n, n, '')
  return res
};