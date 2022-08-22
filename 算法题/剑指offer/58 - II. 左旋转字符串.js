/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  const arr = s.split('')
  traverse(arr, 0, n - 1)
  traverse(arr, n, arr.length - 1)
  traverse(arr, 0, arr.length - 1)
  return arr.join('')
};

function traverse(arr, i, j) {
  while (i < j) {
    const t = arr[i]
    arr[i++] = arr[j]
    arr[j--] = t
  }
}

console.log(reverseLeftWords('abcdef', 2));