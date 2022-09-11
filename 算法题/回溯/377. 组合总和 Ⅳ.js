var combinationSum4 = function (nums, target) {
  const memo = new Array(target).fill(0)
  const dfs = function (nums, target) {
    if (target === 0) return 1
    else if (target < 0) return 0
    if (memo[target]) return memo[target]
    let res = 0
    for (let i = 0; i < nums.length; i++) {
      res += dfs(nums, target - nums[i])
    }
    memo[target] = res
    return res
  }
  return dfs(nums, target)
};

var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= target; i++) {
    for (const num of nums) {
      if (i - num < 0) continue
      dp[i] += dp[i - num]
    }
    console.log(dp);
  }
  return dp[target]
};


console.log(combinationSum4([1, 2], 3)); 