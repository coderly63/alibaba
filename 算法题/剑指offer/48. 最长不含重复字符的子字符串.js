/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = 0
  const n = s.length
  const set = new Set()
  let index = 0
  for (let i = 0; i < n; i++) {
    while (set.has(s[i])) {
      set.delete(s[index])
      index += 1
    }
    set.add(s[i])
    res = Math.max(res, i - index + 1)
  }
  return res
};


console.log(lengthOfLongestSubstring("bbbbb"));