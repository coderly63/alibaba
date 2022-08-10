function foo(arr) {
  const n = arr.length
  const dp = new Array(n)
    .fill(0)
    .map(() => new Array(2).fill(Number.MAX_SAFE_INTEGER))
  dp[0][0] = 0
  dp[0][1] = 0
  for (let i = 1; i < n; i++) {
    if (arr[i][0] === arr[i - 1][0]) dp[i][0] = Math.min(dp[i][0], dp[i - 1][0])
    else dp[i][0] = Math.min(dp[i - 1][0] + arr[i][0] * arr[i - 1][0], dp[i][0])
    if (arr[i][0] === arr[i - 1][1]) dp[i][0] = Math.min(dp[i][0], dp[i - 1][1])
    else dp[i][0] = Math.min(dp[i - 1][1] + arr[i][0] * arr[i - 1][1], dp[i][0])
    if (arr[i][1] === arr[i - 1][0]) dp[i][1] = Math.min(dp[i][1], dp[i - 1][0])
    else dp[i][1] = Math.min(dp[i - 1][0] + arr[i][1] * arr[i - 1][0], dp[i][1])
    if (arr[i][1] === arr[i - 1][1]) dp[i][1] = Math.min(dp[i][1], dp[i - 1][1])
    else dp[i][1] = Math.min(dp[i - 1][1] + arr[i][1] * arr[i - 1][1], dp[i][1])
  }
  console.log(dp)
  return Math.min(dp[n - 1][0], dp[n - 1][1])
}

console.log(
  foo([
    [1, 2],
    [3, 4],
    [7, 12],
  ])
)
