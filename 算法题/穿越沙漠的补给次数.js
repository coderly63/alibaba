// 【题目描述】
// 旅行者穿越沙漠的过程中需要不断地消耗携带的饮用水，到达终点前会经过几个绿洲，
// 每个绿洲均设有水分补给站可以为旅行者提供水分补给并收取一定的费用。
// 沿途共有n个补给站，每个补给站收取的费用都一样，但是提供的水量不尽相同。
// 起点到终点的距离为D公里，postion[i]表示第i个补给站距离起点的距离，
// 单位为公里，supply[i]表示第i 个补给站可以提供的水量，单位为升。
// 假设旅行者在起点时携带了W升的水，每行走1公里需要消耗1升的水量，
// 身上可携带的水量没有上限，且携带的水量多少不会对体能消耗产生影响，
// 鉴于每次进补给站花费的钱都是一样多，期望用最少的补给次数到达终点，
// 请帮忙计算最少的补给次数。

// 【输入描述】
// 第一行输入整数D和W, D表示起点到终点的距离，W表示初始携带的水量
// 第二行输入数组postion，长度为N，分别表示N个补给站分别距离起点的距离
// 第三行输入数组supply，长度为N, 分别表示N个补给站分别可以供给的水量
// 数据范围：1 <= D, W<=10^8, 0<=N<=1000, 0<position[i],supply[i]<D

function leastSupplyNum(D, W, position, supply) {
  const n = position.length
  let res = 0,
    maxSupply = 0,
    maxSupplyIndex = -1
  const visit = new Array(n).fill(0)
  while (W < D) {
    for (let i = 0; i < n; i++) {
      if (position[i] > W) break
      if (visit[i]) continue
      if (supply[i] > maxSupply) {
        maxSupply = supply[i]
        maxSupplyIndex = i
      }
    }
    res += 1
    visit[maxSupplyIndex] = 1
    W += maxSupply
    maxSupply = 0
  }
  console.log(res);
  return res
}

leastSupplyNum(12, 4, [1, 4, 7], [6, 3, 5])
