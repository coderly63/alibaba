function formate (n) {
  const nums = String(n).split('.')
  const s1 = nums[0]
  let stack = [s1[s1.length - 1]]
  let index = 1
  for (let i = s1.length - 2; i >= 0; i--) {
    if ((index++) % 3 === 0) stack.push(',')
    stack.push(s1[i])
  }
  console.log(stack.reverse().join('') + '.' + nums[1]);
}

console.log(formate(12323455.45667)); // 12,323.45