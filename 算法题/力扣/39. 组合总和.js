/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = []
  candidates.sort((a, b) => a - b)
  const dfs = function (index, path, sum) {
    if (sum === target) res.push([...path])
    if (sum > target) return
    for (let i = index; i < candidates.length; i++) {
      path.push(candidates[i])
      dfs(i, path, sum + candidates[i])
      path.pop()
    }
  }
  dfs(0, [], 0)
  return res
};

console.log(combinationSum([2, 3, 6, 7], 7));