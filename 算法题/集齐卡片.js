var collectCard = function (cardArr) {
  const n = cardArr.length;
  let res = -1;
  // 当前集齐的卡片数组
  const cards = new Array(10).fill(0);
  const isAll = function () {
    return cards.every((num) => num > 0);
  };
  // 剪枝
  const checkCardArr = function (package) {
    let flag = 0;
    for (let i = 0; i < package.length; i++) {
      const num = Number(package[i]);
      if (cards[num] === 1) flag += 1;
    }
    if (flag === package.length) return true;
    else return false;
  };
  const buyPackage = function (package) {
    for (let i = 0; i < package.length; i++) {
      const num = Number(package[i]);
      cards[num] = 1;
    }
  };
  const cancelPackage = function (package) {
    for (let i = 0; i < package.length; i++) {
      const num = Number(package[i]);
      cards[num] = 0;
    }
  };
  /**
   *
   * @param {*} num 当前已购买套餐数量
   * @param {*} index 当前索引
   */
  const dfs = function (num, index) {
    // 若集齐所有卡片
    if (isAll()) {
      if (res === -1) res = num;
      else res = Math.min(res, num);
    }
    // 递归搜索 + 剪枝
    for (let i = index; i < n; i++) {
      // 判断当前卡包数字是否都已存在 存在即剪枝
      if (checkCardArr(cardArr[i])) {
        // 不买
        dfs(num, i + 1);
      } else {
        // 买
        buyPackage(cardArr[i]);
        dfs(num + 1, i + 1);
        cancelPackage(cardArr[i]);
      }
    }
  };
  dfs(0, 0);
  return res;
};

// console.log(
//   collectCard(["000", "012", "222", "333", "444", "555", "345", "678", "789"])
// );
// 二进制方式
// 123 => 14 000 => 1 012 => 6 ... n => 1 << n
var collectCardBinary = function (cardArr) {
  const toBinary = function (s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
      res = res | (1 << s[i])
    }
    return res;
  };
  const dp = new Array(1024).fill(Number.MAX_SAFE_INTEGER);
  for (let i = 0; i < cardArr.length; i++) {
    const s = cardArr[i];
    dp[toBinary(s)] = 1;
  }
  for (let i = 0; i <= 1023; i++) {
    for (let j = 0; j <= 1023; j++) {
      dp[i | j] = Math.min(dp[i | j], dp[i] + dp[j]);
    }
  }
  console.log(dp[1023]);
  return dp[1023];
};
collectCardBinary([
  "000",
  "012",
  "222",
  "333",
  "444",
  "555",
  "345",
  "678",
  "789",
]);
