const deepClone = (parent) => {
  if (typeof parent !== 'object' || parent === null) return parent
  else if (typeof parent === 'function') {
    const bar = new Function('return ' + parent())()
    console.log('deepClone ~ bar', bar)
  }
  let child = {}
  const type = getType(parent)
  if (type === 'Array') child = []
  else if (type === 'RegExp') {
    return new RegExp(parent.source, parent.flags)
  } else if (type === 'Date') return new Date(parent.getTime())
  else child.__proto__ = Object.create(parent.__proto__)
  for (const key in parent) {
    if (Object.hasOwnProperty.call(parent, key)) {
      child[key] = deepClone(parent[key])
    }
  }
  return child
}

function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}

const foo = function () {
  console.log(123)
}

const obj = {
  a: 123,
  b: '123',
  c: foo,
  d: /123/gi,
  e: {
    f: '12313213',
    g: [1, 2, 3, '123'],
  },
  h: Date.now(),
}

const copyObj = deepClone(obj)
obj.e.g[0] = 999
console.log(obj)
console.log(copyObj)
console.log(obj.c === copyObj.c)
