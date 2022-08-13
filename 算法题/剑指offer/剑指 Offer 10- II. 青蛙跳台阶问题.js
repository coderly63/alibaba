/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  let p = 1,
    q = 1
  for (let i = 2; i <= n; i++) {
    let t = p
    p = q % 1000000007
    q = (t + p) % 1000000007
  }
  return q
}
