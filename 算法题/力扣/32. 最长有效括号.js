var longestValidParentheses = function (s) {
  const stack = []
  let res = 0
  for (const k of s) {
    if (k === '(') stack.push('(')
    else if (stack.length) {
      stack.pop()
      res += 2
    }
  }
  return res
};