/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const inters = new Array(numCourses).fill(0)
  const map = {}
  for (let i = 0; i < prerequisites.length; i++) {
    const course = prerequisites[i]
    inters[course[0]] += 1
    if (map[course[1]]) map[course[1]].push(course[0])
    else map[course[1]] = [course[0]]
  }
  const queue = []
  for (let i = 0; i < inters.length; i++) {
    if (inters[i] === 0) queue.push(i)
  }
  while (queue.length) {
    const cur = queue.shift()
    const arr = map[cur] || []
    for (let i = 0; i < arr.length; i++) {
      inters[arr[i]] -= 1
      if (inters[arr[i]] === 0) queue.push(arr[i])
    }
  }
  return inters.find((val) => val !== 0) === undefined
};

console.log(canFinish(2, [[0, 1]]));