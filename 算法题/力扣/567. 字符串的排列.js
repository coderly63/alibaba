/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const m = s1.length
  const n = s2.length
  if (m > n) return false
  const arr1 = new Array(26).fill(0)
  const arr2 = new Array(26).fill(0)
  for (let i = 0; i < m; i++) {
    arr1[s1[i].charCodeAt() - 'a'.charCodeAt()] += 1
    arr2[s2[i].charCodeAt() - 'a'.charCodeAt()] += 1
  }
  for (let i = m; i <= n; i++) {
    if (arr1.join('') === arr2.join('')) return true
    else if (i === n) return false
    else {
      arr2[s2[i - m].charCodeAt() - 'a'.charCodeAt()]--
      arr2[s2[i].charCodeAt() - 'a'.charCodeAt()]++
    }
  }
  return false
}

console.log(checkInclusion('ab', 'eidboaoo'))
