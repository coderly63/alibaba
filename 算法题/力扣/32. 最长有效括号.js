var longestValidParentheses = function (s) {
  const stack = []
  let res = 0
  let sum = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')' && !stack.length) {
      sum = 0
    } else if (s[i] === '(') {
      stack.push('(')
    } else {
      stack.pop()
      sum += 2
      res = Math.max(res, sum)
    }
  }
  return res
}
