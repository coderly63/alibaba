const a = '123'
const b = new Number(123)
const c = new String('123')
const d = Symbol(123)
console.log(c instanceof String);
console.log(typeof a, typeof c);
console.log(d, typeof d);