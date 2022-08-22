/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const m = s.length
  const n = p.length
  const arr1 = new Array(26).fill(0)
  const arr2 = new Array(26).fill(0)
  const res = []
  let l = 0
  if (n > m) return res
  for (let i = 0; i < n; i++) {
    arr1[p[i].charCodeAt() - 'a'.charCodeAt()]++
    arr2[s[i].charCodeAt() - 'a'.charCodeAt()]++
  }
  if (arr1.join('') === arr2.join('')) res.push(l)
  for (let r = n; r < m; r++) {
    arr2[s[l++].charCodeAt() - 'a'.charCodeAt()]--
    arr2[s[r].charCodeAt() - 'a'.charCodeAt()]++
    if (arr1.join('') === arr2.join('')) res.push(l)
  }
  return res
}

console.log(findAnagrams('cbaebabacd', 'abc')); // [0， 6]
