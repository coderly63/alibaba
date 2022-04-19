/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
// 递归
var superEggDrop1 = function (k, n) {
  const mem = new Array(k + 1).fill(0).map(() => new Array(n + 1));
  const dp = function (k, n) {
    if (k === 1) return n;
    if (n === 0) return n;
    let res = n;
    if (mem[k][n]) return mem[k][n];
    for (let i = 1; i <= n; i++) {
      res = Math.min(res, Math.max(dp(k - 1, i - 1), dp(k, n - i)) + 1);
    }
    mem[k][n] = res;
    return res;
  };
  return dp(k, n);
};


console.log(superEggDrop2(2, 6));
