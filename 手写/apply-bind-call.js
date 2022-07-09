const name = 'Tom'
const obj = {
  name: 'coderly',
}

Function.prototype.myApply = myApply
Function.prototype.myBind = myBind

function test(a, b, c) {
  console.log(a, b, c)
  console.log(this.name)
}

function myApply(thisArg) {
  const key = Symbol('key')
  const args = [...arguments].slice(1)
  thisArg[key] = this
  thisArg[key](args)
  delete thisArg[key]
}

function myBind(thisArg) {
  const context = this
  const arg = [...arguments].slice(1)
  return function () {
    const key = Symbol('key')
    const newArg = [...arguments]
    thisArg[key] = context
    thisArg[key](...arg.concat(newArg))
    delete thisArg[key]
  }
}

test.myBind(obj, 'fa')(123, 'zzz')
