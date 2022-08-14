
function foo(arr) {
  let res = ''
  const queue = []
  for (let i = arr.length - 1; i >= 0; i--) {
    queue.unshift(arr[i])
    queue.unshift(queue.pop())
    queue.unshift(queue.pop())
  }
  return queue.join('')
}

console.log(foo([1, 2, 3, 4]));
