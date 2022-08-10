var permutation = function (s) {
  const arr = s.split('')
  arr.sort()
  const n = s.length
  const visited = []
  const res = []
  const dfs = function (s, path) {
    if (path.length === n) {
      res.push(path.join(''))
      return
    }
    for (let i = 0; i < n; i++) {
      if (visited[i] || (i > 0 && !visited[i - 1] && s[i - 1] === s[i])) {
        continue
      }
      visited[i] = true
      path.push(s[i])
      dfs(s, path)
      path.pop()
      visited[i] = false
    }
  }
  dfs(arr, [])
  return res
}

console.log(permutation("abc"));

const arr = ['a', 'b', 'c', 'ac']