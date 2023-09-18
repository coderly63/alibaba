var a = 0,
  b = 0
function A(a) {
  A = function (b) {
    console.log('a, b', a, b)
    console.log(a + b++)
  }
  console.log(a++)
}
A(1)
A(2)

// let a = 12,
//   bar
// function foo() {
//   a = 99
//   bar = function () {
//     console.log(a)
//   }
// }
// foo()
// bar()
console.log(999)
console.log(666)
