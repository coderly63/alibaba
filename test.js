function clone(parent) {
  const parents = []
  const childs = []
  function _clone(parent) {
    if (!parent || typeof parent !== 'object') return parent
    let child = {}
    const type = getType(parent)
    if (type === 'array') child = []
    else if (type === 'regexp') return new RegExp(parent.source, parent.flags)
    else if (type === 'date') return new Date(parent.getTime())
    else if (type === 'function') return new Function('return ' + parent.toString())()
    else child.__proto__ = Object.create(parent.__proto__)
    const index = parents.findIndex((item) => item === parent)
    if (index > -1) return child[index]
    parents.push(parent)
    childs.push(child)
    for (const key in parent) {
      if (Object.hasOwnProperty.call(parent, key)) {
        const val = parent[key];
        child[key] = _clone(val)
      }
    }
    return child
  }
  return _clone(parent)
}

function getType(val) {
  return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase()
}

const obj = {
  'a': 123,
  'b': {
    'c': 'fasd',
    'd': [1, 2, 3]
  },
  'e': undefined,
  'f': null,
  'g': /abc/ig
}
const copyObj = clone(obj)
console.log('copyObj', copyObj)
console.log(obj.g === copyObj.g);
function foo() { }
console.log(getType(foo));