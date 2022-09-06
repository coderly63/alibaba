const v = [1, 2, 3, 4]
const w = [2, 4, 4, 5]

var foo = function (w, v, n, m) {
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))
  w.unshift(0)
  v.unshift(0)
  for (let i = 1; i <= n; i++) {
    for (let j = v[i]; j <= m; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - v[i]] + w[i])
    }
  }
  console.log(dp);
}
foo(w, v, 4, 5)

var foo = function (w, v, n, m) {
  const dp = new Array(m + 1).fill(0)
  w.unshift(0)
  v.unshift(0)
  for (let i = 1; i <= n; i++) {
    for (let j = m; j >= v[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - v[i]] + w[i])
    }
  }
  console.log(dp);
}


var foo = function (w, v, n, m) {
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))
  w.unshift(0)
  v.unshift(0)
  for (let i = 1; i <= n; i++) {
    for (let j = v[i]; j <= m; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - v[i]] + w[i])
    }
  }
  console.log(dp);
}

var foo = function (w, v, n, m) {
  const dp = new Array(m + 1).fill(0)
  w.unshift(0)
  v.unshift(0)
  for (let i = 1; i <= n; i++) {
    for (let j = v[i]; j <= m; j++) {
      dp[j] = Math.max(dp[j], dp[j - v[i]] + w[i])
    }
  }
  console.log(dp);
}
foo(w, v, 4, 5)