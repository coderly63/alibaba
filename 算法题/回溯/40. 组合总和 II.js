/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = []
  candidates.sort((a, b) => a - b)
  const dfs = function (candidates, target, path, index) {
    if (target === 0) return res.push([...path])
    else if (target < 0) return
    for (let i = index; i < candidates.length; i++) {
      if (i > 0 && candidates[i] === candidates[i - 1] && i !== index) break
      path.push(candidates[i])
      dfs(candidates, target - candidates[i], path, i + 1)
      path.pop()
    }
  }
  dfs(candidates, target, [], 0)
  return res
};