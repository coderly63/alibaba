/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length
  let res = s[0]
  for (let i = 0; i < n; i++) {
    let l = i - 1, r = i + 1
    while (l >= 0 && r < n && s[l] === s[r]) {
      res = r - l + 1 > res.length ? s.slice(l, r + 1) : res
      l--
      r++
    }
    l = i, r = i + 1
    while (l >= 0 && r < n && s[l] === s[r]) {
      res = r - l + 1 > res.length ? s.slice(l, r + 1) : res
      l--
      r++
    }
  }
  return res
};