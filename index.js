const sum = function () {
  const args1 = [...arguments]
  let res = args1.reduce((pre, cur) => pre + cur)
  function add() {
    const args2 = [...arguments]
    if (!args2.length) return res
    else {
      res += args2.reduce((pre, cur) => pre + cur)
      return add
    }
  }
  return add
}

console.log(sum(1, 14, 7)(22)(33)())
