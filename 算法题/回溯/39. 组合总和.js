/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = []
  const dfs = function (candidates, target, path, index) {
    if (target === 0) return res.push([...path])
    else if (target < 0) return
    for (let i = index; i < candidates.length; i++) {
      path.push(candidates[i])
      dfs(candidates, target - candidates[i], path, i)
      path.pop()
    }
  }
  dfs(candidates, target, [], 0)
  return res
};