var myJsonStringify = function (obj) {
  let type = getType(obj)
  if (!isObject(obj)) {
    if (type === 'String') return '"' + obj + '"'
    else if (type === 'Function' || type === 'Symbol' || type === 'Undefined') return 'null'
    else return String(obj)
  } else {
    let res = []
    if (type === 'Array') {
      for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
          const value = obj[key];
          res.push()
        }
      }
    }
  }
}

function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === 'object'
}