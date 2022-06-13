/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
};
// 递归快速幂
const quickMul = function(x, n) {
  if (n === 0) return 1
  if (n === 1) return x
  const y = quickMul(x, Math.floor(n / 2))
  return n % 2 === 0 ? y * y : y * y * x
}

const res = quickMul(2, 10)
console.log("🚀 ~ file: 剑指 Offer 16. 数值的整数次方.js ~ line 17 ~ res", res)