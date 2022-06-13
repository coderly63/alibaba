function A() {}
A.prototype.name = 'Tom'
console.log(A.name)

Object.defineProperty(A.prototype, 'name', {
  set() {
    this._name = 'Jerry'
    console.log(this);
  },
  get() {
    return 99
  },
})

A.prototype.name = 'coder'
console.log(A.prototype.name);