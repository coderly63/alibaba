/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let result = 0;
  const visit = new Array(m).fill(0).map(() => new Array(n).fill(0));
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];
  const dfs = function (x, y) {
    if (grid[x][y] === "0" || visit[x][y]) return;
    visit[x][y] = 1;
    for (let i = 0; i < 4; i++) {
      const x0 = x + dx[i];
      const y0 = y + dy[i];
      // 岛屿边界情况
      if (x0 < 0 || x0 >= m || y0 < 0 || y0 >= n) continue;
      // console.log(x0, y0);
      dfs(x0, y0);
    }
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (visit[i][j] || grid[i][j] === "0") continue;
      dfs(i, j);
      result += 1;
    }
  }
  return result;
};

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
console.log(numIslands(grid));
