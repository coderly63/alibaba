/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = []
  const n = nums.length
  nums.sort((a, b) => a - b)
  function dfs(nums, path, visit) {
    if (path.length === nums.length) return res.push([...path])
    for (let i = 0; i < nums.length; i++) {
      if (visit[i] || (i > 0 && nums[i] === nums[i - 1] && !visit[i - 1])) continue
      visit[i] = 1
      path.push(nums[i])
      dfs(nums, path, visit)
      path.pop()
      visit[i] = 0
    }
  }
  dfs(nums, [], new Array(n).fill(0))
  return res
};


console.log(permute([1, 1, 3]));
