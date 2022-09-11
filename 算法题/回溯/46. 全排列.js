/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = []
  const n = nums.length
  function dfs(nums, path, visit) {
    if (path.length === nums.length) return res.push([...path])
    for (let i = 0; i < nums.length; i++) {
      if (visit[i]) continue
      visit[i] = 1
      path.push(nums[i])
      dfs(nums, path, visit)
      path.pop()
      visit[i] = 0
      console.log(nums[i], path);
    }
  }
  dfs(nums, [], new Array(n).fill(0))
  return res
};

console.log(permute([1, 2, 3]));