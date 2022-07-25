const deleteSomeChar = function (str) {
  const stack = []
  for (const c of str) {
    if (c === 'b') continue
    else if (c === 'c' && stack.length && stack[stack.length - 1] === 'a')
      stack.pop()
    else stack.push(c)
  }
  return stack.join('')
}

console.log(deleteSomeChar('tfbbacacabacccajo'));