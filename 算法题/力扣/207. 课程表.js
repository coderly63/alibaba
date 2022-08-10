/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function recur(arr, i, visited) {
  const course = arr[i]
  for (let j = 0; j < course.length; j++) {
    if (visited[course[j]] === 1) return false
    if (visited[course[j]] === -1) return true
    visited[course[j]] = 1
    if (!recur(arr, course[j], visited)) return false
    visited[course[j]] = -1
  }
  return true
}
var canFinish = function (numCourses, prerequisites) {
  const arr = new Array(numCourses).fill(0).map(() => new Array())
  for (let i = 0; i < prerequisites.length; i++) {
    const course = prerequisites[i]
    arr[course[0]].push(course[1])
  }
  for (let i = 0; i < arr.length; i++) {
    if (!recur(arr, i, new Array(numCourses))) return false
  }
  return true
}

console.log(canFinish(2, [[1, 0]]))
