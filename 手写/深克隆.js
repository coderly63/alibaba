const clone = function (parent) {
  const parents = []
  const childs = []
  const _clone = function (parent) {
    let child = {}
    if (typeof parent !== 'object') return parent
    else if (parent instanceof Array) child = []
    else if (Object.prototype.toString.call(parent) === '[object Date]')
      child = new Date(parent.getTime())
    else if (Object.prototype.toString.call(parent) === '[object RegExp]')
      child = new RegExp(child.source, child.flags)
    else child.__proto__ = Object.create(parent.__proto__)
    const index = parents.indexOf(parent)
    if (index > -1) return childs[index]
    parents.push(parent)
    childs.push(child)
    for (const key in parent) {
      if (Object.hasOwnProperty.call(parent, key)) {
        child[key] = _clone(parent[key])
      }
    }
    return child
  }
  return _clone(parent)
}

const obj = {
  a: 123,
  b: 'fasdf',
  c: {
    d: Date.now(),
    e: /abc/ig,
    f: {
      g: 'gggg',
    },
  },
}

const cloneObj = clone(obj)
console.log('cloneObj', cloneObj)
