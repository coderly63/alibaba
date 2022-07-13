const flatten = function (arr, depth) {
  const res = []
  for (const item of arr) {
    if (item instanceof Array && depth > 0) res.push(...flatten(item, depth - 1))
    else res.push(item)
  }
  return res
}

const arr = [1, [23, [234, 56, [3, 4, [5, 6], 7, 8], 9], 77], 1231]
console.log(flatten(arr, 2));
console.log(arr.flat(2));