/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const n = nums.length
  nums.sort((a, b) => a - b)
  const res = []
  const dfs = function (index, path, visited) {
    res.push([...path])
    for (let i = index; i < n; i++) {
      path.push(nums[i])
      dfs(i + 1, path)
      path.pop()
    }
  }
  dfs(0, [])
  return res
}

console.log(subsets([1, 2, 3]))
