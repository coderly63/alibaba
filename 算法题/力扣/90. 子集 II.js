/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const n = nums.length
  const visited = new Array(n).fill(0)
  nums.sort((a, b) => a - b)
  const res = []
  const dfs = function (index, path, visited) {
    res.push([...path])
    for (let i = index; i < n; i++) {
      if (i !== 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue
      visited[i] = 1
      path.push(nums[i])
      dfs(i + 1, path, visited)
      visited[i] = 0
      path.pop()
    }
  }
  dfs(0, [], visited)
  return res
}

console.log(subsetsWithDup([1, 2, 2]))
