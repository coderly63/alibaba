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
  const backTrack = function (i, combinations) {
    // 递归出口
    if (i === digits.length) {
      return res.push(combinations);
    }
    const arr = phone[digits[i]];
    for (let j = 0; j < arr.length; j++) {
      backTrack(i + 1, combinations + arr[j]);
    }
  };
  backTrack(0, "");
  return res;
};
letterCombinations("23");
