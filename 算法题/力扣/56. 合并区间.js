/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const res = []
  let index = -1
  for (const arr of intervals) {
    if (index === -1 || arr[0] > res[index][1]) {
      index += 1
      res[index] = arr
    } else res[index][1] = Math.max(res[index][1], arr[1])
  }
  console.log(res);
  return res
}

const arr = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]

merge(arr)
