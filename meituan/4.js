function findIflytek(str) {
  const n = str.length
  let res = 0
  const tmp = 'iflytek'
  function dfs(s, i, tmp, j) {
    if (j === tmp.length) {
      res += 1
      return
    }
    if (i >= n) return
    if (s[i] === tmp[j]) dfs(s, i + 1, tmp, j + 1)
    dfs(s, i + 1, tmp, j)
  }
  dfs(str, 0, tmp, 0)
  return res
}

console.log(findIflytek('iflytekiflytek'))
