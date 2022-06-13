// 【题目描述】
// 给定一个迷宫，找到最快从起点到达重点的路径所需要的步数。
// 假设迷宫如下，假定左上角坐标为(0,0)，右下角坐标为 (3,2)
// 1 0 -1 1
// -2 0 -1 -3
// 2 2 0 0
// -2是迷宫的起点，坐标为(0,1)
// -3是迷宫的终点，坐标为(3,1)
// -1代表障碍物，不能行走
// 1和2代表传送门，传送门由正整数标示，只会成对出现。站在传送门上，能仅用一步就传送到相同数字的另一个传送门的位置：1只能传送到1，2只能传送到2。站在传送门上也可以选择不传送。
// 从起点到终点有若干种走法，举例如下：
// (0,1)->(1,1)->(1,2)->(2,2)->(3,2)->(3,1)，共花费5步
// 或者
// (0,1)->(0,0)-传送>(3,0)->(3,1)，共花费3步
// 经检验3步是所需的最少步数，最后结果返回3

// 【输入描述】
// 每一行输入都是用空格隔开的整数
// 第一行给出迷宫地图的长和宽，均为正整数
// 之后每一行的每一个数字，都代表迷宫的一格
// -2表示起点，-3表示终点，-1表示不可通过的障碍物，0表示可通过的道路，大于0的正整数代表传送门，
// 并且保证成对出现，在传送门上，可以仅用一步传送到另一个相同数字的传送门的位置。

const latestMaze = function (maze) {
  const m = maze.length
  const n = maze[0].length
  const map = []
  let res = Number.MAX_SAFE_INTEGER
  let start = { x: -1, y: -1 }
  const dx = [-1, 0, 1, 0]
  const dy = [0, 1, 0, -1]
  const visit = new Array(m).fill(0).map(() => new Array(n))
  // 找到各类型节点
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const index = maze[i][j]
      if (index > 0) {
        if (!map[index]) map[index] = [{ x: i, y: j }]
        else map[index].push({ x: i, y: j })
      } else if (index === -2) {
        visit[i][j] = 1
        start.x = i
        start.y = j
      }
    }
  }
  const dfs = function (x, y, ans) {
    const index = maze[x][y]
    // 递归终止条件
    if (index === -3) res = Math.min(ans, res)
    // 若是传送门
    else if (index > 0) {
      const doors = map[index]
      for (let i = 0; i < doors.length; i++) {
        const door = doors[i]
        if (door.x === x && door.y === y) next()
        else if (visit[door.x][door.y]) continue
        else {
          visit[door.x][door.y] = 1
          dfs(door.x, door.y, ans + 1)
          visit[door.x][door.y] = 0
        }
      }
    } else {
      next()
    }
    const next = function () {
      for (let i = 0; i < 4; i++) {
        const x0 = x + dx[i]
        const y0 = y + dy[i]
        // 边界情况
        if (x0 < 0 || x0 >= m || y0 < 0 || y0 >= n || visit[x0][y0] || maze[x0][y0] === -1) continue
        visit[x][y] = 1
        dfs(x0, y0, ans + 1)
        visit[x][y] = 0
      }
    }
  }
  dfs(start.x, start.y)
  console.log(res);
}

const maze = [
  [1, 0, -1, 1],
  [-2, 0, -1, -3],
  [2, 2, 0, 0],
]
latestMaze(maze)
