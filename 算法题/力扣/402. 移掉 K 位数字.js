/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const res = []
  if (num.length === k) return '0'
  for (const s of num) {
    while (res[res.length - 1] > s && k && res.length) {
      res.pop()
      k -= 1
    }
    if (s !== '0' || res.length) res.push(s)
  }
  while (k--) {
    res.pop()
  }
  return res.length == 0 ? "0" : res.join('');
}

console.log(removeKdigits('10200', 1)); // 1219
