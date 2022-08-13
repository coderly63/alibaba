/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  const n = s.length
  let s1 = ''
  let s2 = ''
  let hasChange = 0
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      s1 += '1'
      s2 += '0'
    } else {
      s1 += '0'
      s2 += '1'
    }
    if (s[i] === '1') hasChange += 1
  }
  const t = Math.floor(n / 2)
  if (n % 2 === 0 && hasChange !== n / 2) return -1
  else if (n % 2 !== 0 && hasChange !== t && hasChange !== t + 1) return -1
  let count1 = 0,
    count2 = 0
  for (let i = 0; i < n; i++) {
    if (s1[i] !== s[i]) count1 += 1
    if (s2[i] !== s[i]) count2 += 1
  }
  if (count1 % 2 !== 0) return count2 / 2
  if (count2 % 2 !== 0) return count1 / 2
  return Math.min(count1 / 2, count2 / 2)
}

console.log(minSwaps('01100')); // 10101
