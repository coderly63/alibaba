/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const queue = []
  let maxLen = 0
  for (let j = 0; j < s.length; j++) {
    while (queue.includes(s[j])) queue.shift()
    queue.push(s[j])
    maxLen = Math.max(maxLen, queue.length)
  }
  return maxLen
}

console.log(lengthOfLongestSubstring('  '))
