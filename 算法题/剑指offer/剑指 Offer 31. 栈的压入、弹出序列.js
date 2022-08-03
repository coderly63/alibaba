/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = []
  while (pushed.length && popped.length) {
    while ((pushed.length && stack[stack.length - 1] !== popped[0]) || !stack.length) {
      stack.push(pushed.shift())
    }
    while (stack.length && stack[stack.length - 1] === popped[0]) {
      stack.pop()
      popped.shift()
    }
  }
  if (stack.length) return false
  else return true
}

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 1, 5, 2]));
