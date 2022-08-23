// [2, 6, 8] 266221
//           10000
function getMaxNumber(arr, limit) {
  arr.sort((a, b) => a - b)
  let offset = 1
  limit -= 1
  while (offset <= limit) {
    offset *= 10
  }
  offset /= 10
  const res = dfs(arr, limit, offset)
  if (res === -1) return joinBehind(arr, offset)
  else return res
}
function dfs(arr, limit, offset) {
  if (offset === 0) return limit
  const cur = Math.floor(limit / offset) % 10
  let near = getNear(arr, cur)
  if (near !== -1) {
    if (arr[near] === cur) {
      const ans = dfs(arr, limit, Math.floor(offset / 10))
      if (ans !== -1) return ans
      if (near > 0) {
        // 此时取比当前数稍小一点的数(2) 后面拼最大值 2661 --> 2628
        near -= 1
        return Math.floor(limit / (offset * 10)) * (offset * 10) + arr[near] * offset + joinBehind(arr, offset)
      } else return -1
    } else {
      // 此时取当前数字(6) 后面拼接最大数 如222266711  --- > 222266688
      return Math.floor(limit / (offset * 10)) * (offset * 10) + arr[near] * offset + joinBehind(arr, offset)
    }
  } else return -1
}
function getNear(arr, number) {
  let l = 0, r = arr.length - 1
  while (l <= r) {
    const mid = (l + r) >> 1
    if (arr[mid] === number) return mid
    if (arr[mid] < number) l = mid + 1
    else r = mid - 1
  }
  return r
}
function joinBehind(arr, offset) {
  let res = 0
  const max = arr[arr.length - 1]
  while (offset > 0) {
    offset = Math.floor(offset / 10)
    res += offset * max
  }
  return res
}
const arr = [2, 6, 8]
console.log(getMaxNumber(arr, 2226662));