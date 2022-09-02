/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const n = nums.length
  const visited = new Array(n).fill(0)
  nums.sort((a, b) => a - b)
  const res = []
  const dfs = function (index, path) {
    res.push([...path])
    for (let i = index; i < n; i++) {
      if (i !== index && nums[i] === nums[i - 1]) continue
      path.push(nums[i])
      dfs(i + 1, path)
      path.pop()
    }
  }
  dfs(0, [])
  return res
}

console.log(subsetsWithDup([1, 2, 2]))
