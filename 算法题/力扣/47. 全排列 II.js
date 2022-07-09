/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = []
  const n = nums.length
  const visit = new Array(n).fill(0)
  nums.sort()
  const dfs = function (visit, path) {
    if (path.length === n) res.push([...path])
    for (let i = 0; i < n; i++) {
      if (i !== 0 && nums[i] === nums[i - 1] && visit[i - 1]) continue
      if (visit[i]) continue
      visit[i] = 1
      path.push(nums[i])
      dfs(visit, path)
      visit[i] = 0
      path.pop()
    }
  }
  dfs(visit, [])
  return res
}
