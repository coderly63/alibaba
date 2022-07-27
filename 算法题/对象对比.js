const compareObj = function (obj1, obj2) {
  for (const key in obj1) {
    if (Object.hasOwnProperty.call(obj1, key)) {
      const value1 = obj1[key]
      const value2 = obj2[key]
      // console.log(value1, value2)
      if (
        typeof value1 !== 'object' &&
        typeof value2 !== 'object' &&
        value1 !== value2
      )
        return false
      else if (
        (value1 === null && value2 !== null) ||
        (value1 !== null && value2 === null) ||
        (typeof value1 === 'object' && typeof value2 !== 'object') ||
        (typeof value1 !== 'object' && typeof value2 === 'object')
      )
        return false
      else if (
        typeof value1 === 'object' &&
        typeof value2 === 'object' &&
        !compareObj(value1, value2)
      )
        return false
    }
  }
  return true
}

const obj1 = {
  a: 123,
  b: 'fasdf',
  c: false,
  d: undefined,
  e: null,
  f: {
    g: 32,
    e: '99',
  },
  h: [{ a: 11, b: '22' }, 32],
}
const obj2 = {
  a: 123,
  b: 'fasdf',
  c: false,
  d: undefined,
  e: null,
  f: {
    g: 32,
    e: '99',
  },
  h: [{ a: 11, b: '22' }, 32],
}

console.log(compareObj(obj1, obj2))
const reg = /\b\w+\b/ig
console.log(reg.flags)