/**
 * @param {string} digits "234"
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const phone = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const res = [];
  if (digits === "") return res;
  const dfs = function (index, path) {
    if (index === digits.length) {
      res.push(path.join(''))
      return
    }
    const arr = phone[digits[index]]
    for (let i = 0; i < arr.length; i++) {
      path.push(arr[i])
      dfs(index + 1, path)
      path.pop()
    }
  }
  dfs(0, [])
  return res
};
console.log(letterCombinations("23"));
