/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let i = 1, j = 2
  const res = []
  const arr = new Array(target + 1).fill(0).map((val, index) => index)
  let sum = arr[1] + arr[2]
  while (i < j && i <= target && j <= target) {
    if (sum === target) {
      res.push(arr.slice(i, j + 1))
      sum -= arr[i]
      i += 1
    }
    else if (sum < target) {
      j += 1
      sum += arr[j]
    } else {
      sum -= arr[i]
      i += 1
    }
  }
  return res
};

console.log(findContinuousSequence(15));