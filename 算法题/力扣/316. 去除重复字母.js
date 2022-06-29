/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const m = new Map()
  const stack = []
  for (const c of s) {
    if (m.get(c)) m.set(c, m.get(c) + 1)
    else m.set(c, 1)
  }
  for (const c of s) {
    m.set(c, m.get(c) - 1)
    if (stack.includes(c)) continue
    while (
      stack.length &&
      stack[stack.length - 1] > c &&
      m.get(stack[stack.length - 1])
    )
      stack.pop()
    stack.push(c)
  }
  return stack.join('')
}
console.log(removeDuplicateLetters('cbacdcbc')) // acdb
