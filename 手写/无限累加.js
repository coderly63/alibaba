function sum() {
  let res = [...arguments].reduce((pre, cur) => pre + cur, 0)
  function _sum() {
    res += [...arguments].reduce((pre, cur) => pre + cur, 0)
    return _sum
  }
  _sum.sumOf = () => res
  return _sum
}

function sum2() {
  let res = [...arguments].reduce((pre, cur) => pre + cur, 0)
  function _sum() {
    const args = [...arguments]
    if (args.length) {
      res += args.reduce((pre, cur) => pre + cur, 0)
      return _sum
    } else {
      return res
    }
  }
  return _sum
}

console.log(sum(1, 2, 3)(4)(5, 6).sumOf())
console.log(sum2(1, 2, 3)(4)(5, 6)())
