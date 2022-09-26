const myInstanceof = function (left, right) {
  left = left.__proto__
  while (left) {
    if (left === right.prototype) return true
    left = left.__proto__
  }
  return false
}

console.log(myInstanceof(new String('abc'), String));