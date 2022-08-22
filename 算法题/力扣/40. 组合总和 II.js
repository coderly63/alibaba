/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = []
  candidates.sort((a, b) => a - b)
  const dfs = function (index, target, path) {
    if (target === 0) res.push([...path])
    if (target < 0) return
    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] === candidates[i - 1]) continue
      path.push(candidates[i])
      dfs(i + 1, target - candidates[i], path)
      path.pop()
    }
  }
  dfs(0, target, [])
  return res
};