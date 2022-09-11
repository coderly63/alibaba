/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  if (s.length < k) return 0
  const map = new Map()
  for (const c of s) {
    map.set(c, (map.get(c) || 0) + 1)
  }
  for (const c of map.keys()) {
    if (map.get(c) < k) {
      let count = 0
      for (const arr of s.split(c)) {
        count = Math.max(count, longestSubstring(arr, k))
      }
      return count
    }
  }
  return s.length
};

console.log(longestSubstring('ababbc', 2));