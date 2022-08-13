/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const arr = new Array(numCourses).fill(0).map(() => new Array())
  for (const course of prerequisites) {
    arr[course[0]].push(course[1])
  }
  console.log(arr)
  
}

canFinish(5, [
  [0, 1],
  [1, 2],
  [2, 3],
  [2, 4],
])
