var name = 'name'
var A = {
  name: 'A',
  sayHello: function () {
    let s = () => console.log(this.name)
    return s
  },
}
let sayHello = A.sayHello()
sayHello()
var B = {
  name: 'B',
}
sayHello.call(B)
