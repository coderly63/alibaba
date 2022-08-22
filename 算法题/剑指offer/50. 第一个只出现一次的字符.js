/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  const dp = new Array(27).fill(0)
  let res = ' '
  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt() - 'a'.charCodeAt()
    dp[index] += 1
  }
  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt() - 'a'.charCodeAt()
    if (dp[index] === 1) return s[i]
  }
  return res
};

console.log(firstUniqChar("leetcode"));