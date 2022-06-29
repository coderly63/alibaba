const getMaxBlock = (n, k) => {
  let res = 0
  const dfs = (x, y, n) => {
    if (n === 0) return res += 1
    if (y < k) dfs(y, y + 1, n - 1)
    if (x > 1) dfs(x - 1, x, n - 1)
  }
  for (let i = 1; i < k; i++) {
    const t = dfs(i, i + 1, n - 1)
    console.log(res);
  }
  console.log(res)
}
getMaxBlock(3, 8)
