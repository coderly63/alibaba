/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let start = 1, digit = 1, count = 9
  while (n > count) {
    n -= count
    start *= 10
    digit += 1
    count = start * digit * 9
  }
  const num = start + Math.floor((n - 1) / digit)
  return Number(String(num)[(n - 1) % digit])
};