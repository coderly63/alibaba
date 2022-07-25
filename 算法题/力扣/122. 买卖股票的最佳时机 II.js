/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const stack = []
  let res = 0
  for (const price of prices) {
    while (stack.length && stack[stack.length - 1] > price) stack.pop()
    res += stack.length && price + stack[stack.length - 1]
    stack.push(price)
  }
  return res
};

const prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices));