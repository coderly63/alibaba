function foo(n) {
  const nums = String(n).split('.')
  const stack = []
  const s = nums[0]
  let index = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (i !== s.length - 1 && index % 3 === 0) stack.push(',')
    index += 1
    stack.push(s[i])
  }
  console.log(stack)
  return stack.reverse().join('') + '.' + nums[1]
}

function bar(n) {
  const s = String(n)
  let res
  s.replace(/^(-?)(\d*)((\.)?\d*)/g, (match, s1, s2, s3) => {
    res = s1 + s2.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,') + s3
  })
  return res
}
console.log(bar(-1234567890.123))
