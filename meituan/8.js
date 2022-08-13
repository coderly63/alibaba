function foo(arr) {
  const n = arr.length
  const dp = new Array(n).fill(0).map(() => new Array(2).fill(0))
  for (let i = 1; i < n; i++) {
    if (arr[i][0] === arr[i - 1][0] || arr[i][0] === arr[i - 1][1]) {
      dp[i][0] = Math.min
    } else if 
  }
}

foo([
  [1, 3],
  [2, 1],
  [2, 3],
])
