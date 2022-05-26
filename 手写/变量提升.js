console.log(a) //f a()
console.log(a()) //1 ---> undefined
function a() {
  console.log(1)
}
var a = 1
console.log(a) //1
a = 3
console.log(a()) //a not a function
