/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x === 1) return 1
  let res = 1
  if (n < 0) {
    x = 1 / x
    n = -n
  }
  while (n) {
    if (n & 1) res *= x
    x *= x
    n >>>= 1
  }
  return res
}
// 1010
console.log(myPow(3, -3))
