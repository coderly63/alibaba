let singleObj = null

class GetSingle {
  constructor(name) {
    if (singleObj) return singleObj
    else {
      this.name = name
      singleObj = this
    }
  }
  static say () {
    console.log('say...');
  }
  eat () {
    console.log('eat...');
  }
}
const s1 = new GetSingle('coder')
const s2 = new GetSingle('coder')
console.log(s1 === s2);
console.log(s1);
GetSingle.say()
s1.eat()