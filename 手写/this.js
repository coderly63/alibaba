const myObject = {
  name: 'coder',
  func: function () {
    const self = this
    console.log(this.name)
    console.log(self.name)
    ;(function () {
      console.log(this.name)
      console.log(self.name)
    })()
  },
}

myObject.func()
const func2 = myObject.func
func2()
