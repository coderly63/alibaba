/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  let z = 0
  let m = 1
  let x = 0
  let y = 0
  for (const num of nums) z ^= num
  while ((m & z) === 0) {
    m <<= 1
  }
  for (const num of nums) {
    if (num & m) x ^= num
    else y ^= num
  }
  return [x, y]
};
// [1,10,4,1,4,3,3] ===> [2, 10]
const arr = [1, 2, 10, 4, 1, 4, 3, 3]
console.log(singleNumbers(arr));