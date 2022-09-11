let obj = {
  a: 1,
  'b.c': 2,
  'b.d.e': 3
}

// obj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3
//     }
//   }
// }

var formateObj = (obj) => {
  Object.keys(obj).forEach(key => {
    const val = obj[key]
    const keys = key.split('.')
    let last = obj
    if (keys.length > 1) {
      delete obj[key]
      for (let i = 0; i < keys.length; i++) {
        const k = keys[i]
        if (i !== keys.length - 1) {
          if (!last[k]) last[k] = {}
          last = last[k]
        } else {
          last[k] = val
        }
      }
    }
  });
  return obj
}

function dfs(keys, val, target) {
  const len = keys.length
  const key = keys[0]
  if (len === 1) return target[key] = val
  if (!target[key]) target[key] = {}
  dfs(keys.slice(1), val, target[key])
}
var formateObj = function (obj) {
  const target = {}
  Object.keys(obj).forEach((key) => {
    dfs(key.split('.'), obj[key], target)
  })
  return target
}

console.log(formateObj(obj));