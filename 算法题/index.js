const r = new Date()
const temp = Object.prototype.toString.call(r)
console.log('temp', temp)
const test = "[123 aasdf 2r3 f3fa]"
const type = test.match(/\b\w+\b/g);
console.log('type', type)