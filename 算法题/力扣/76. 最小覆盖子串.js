/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  function checkArrInstanceof(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] > arr2[i]) return false
    }
    return true
  }
  const m = s.length
  const n = t.length
  if (n > m) return ''
  let res = ''
  let l = 0
  const arr1 = new Array(100).fill(0)
  const arr2 = new Array(100).fill(0)
  for (let i = 0; i < n; i++) {
    arr1[t[i].charCodeAt() - 'A'.charCodeAt()] += 1
    arr2[s[i].charCodeAt() - 'A'.charCodeAt()] += 1
  }
  if (checkArrInstanceof(arr1, arr2)) res = s.slice(0, n)
  for (let r = n; r < m; r++) {
    arr2[s[r].charCodeAt() - 'A'.charCodeAt()] += 1
    while (checkArrInstanceof(arr1, arr2) && r >= l) {
      if (r - l + 1 < res.length || !res.length) res = s.slice(l, r + 1)
      arr2[s[l].charCodeAt() - 'A'.charCodeAt()] -= 1
      l += 1
    }
  }
  return res
}

console.log(minWindow('ab', 'b'));
