function jsonStringify(target, initParent = [target]) {
  let type = getType(target)
  let iterableList = ['Object', 'Array', 'Arguments', 'Set', 'Map']
  let specialList = ['Undefined', 'Symbol_basic', 'Function']
  // 如果是基本数据类型
  if (!isObject(target)) {
    if (type === 'Symbol_basic' || type === 'Undefined') {
      return undefined
    } else if (
      Number.isNaN(target) ||
      target === Infinity ||
      target === -Infinity
    ) {
      return 'null'
    } else if (type === 'String') {
      return `"${target}"`
    }
    return String(target)
  }
  // 如果是引用数据类型
  else {
    let res
    // 如果是不可以遍历的类型
    if (!iterableList.includes(type)) {
      res = processOtherTypes(target, type)
    }
    // 如果是可以遍历的类型
    else {
      // 如果是数组
      if (type === 'Array') {
        res = target.map((item) => {
          if (specialList.includes(getType(item))) {
            return 'null'
          } else {
            // 检测循环引用
            let currentParent = [...initParent]
            // checkCircular(item, currentParent)
            return jsonStringify(item, currentParent)
          }
        })
        console.log(res);
        console.log(`[${res}]`);
        res = `[${res}]`.replace(/'/g, '"')
      }
      // 如果是对象字面量、类数组对象、Set、Map
      else {
        res = []
        Object.keys(target).forEach((key) => {
          // Symbol 类型的 key 直接略过
          if (getType(key) !== 'Symbol_basic') {
            let keyType = getType(target[key])
            if (!specialList.includes(keyType)) {
              // 检测循环引用
              let currentParent = [...initParent]
              // checkCircular(target[key], currentParent)
              // 往数组中 push 键值对
              res.push(`"${key}":${jsonStringify(target[key], currentParent)}`)
            }
          }
        })
        res = `{${res}}`.replace(/'/g, '"')
      }
    }
    return res
  }
}

function getType(o) {
  return typeof o === 'symbol'
    ? 'Symbol_basic'
    : Object.prototype.toString.call(o).slice(8, -1)
}

function isObject(o) {
  return o !== null && (typeof o === 'object' || typeof o === 'function')
}

function processOtherTypes(target, type) {
  switch (type) {
    case 'String':
      return `"${target.valueOf()}"`
    case 'Number':
    case 'Boolean':
      return target.valueOf().toString()
    case 'Symbol':
    case 'Error':
    case 'RegExp':
      return '{}'
    case 'Date':
      return `"${target.toJSON()}"`
    case 'Function':
      return undefined
    default:
      return ''
  }
}

console.log(jsonStringify([1, "qwe", null, undefined, Symbol(''), false]))
