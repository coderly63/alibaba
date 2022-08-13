/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const inCount = new Array(numCourses).fill(0)
  const map = {}
  for (const course of prerequisites) {
    inCount[course[0]] += 1
    if (!map[course[1]]) map[course[1]] = [course[0]]
    else map[course[1]].push(course[0])
  }
  console.log(inCount)
  console.log(map)
  const queue = []
  for (let i = 0; i < numCourses; i++) {
    if (inCount[i] === 0) queue.push(i)
  }
  let count = 0
  while (queue.length) {
    const cur = queue.shift()
    count += 1
    const courses = map[cur]
    if (!courses) continue
    for (const id of courses) {
      inCount[id] -= 1
      if (inCount[id] === 0) queue.push(id)
    }
  }
  return count === numCourses
}

console.log(
  canFinish(4, [
    [0, 1],
    [0, 2],
    [0, 3],
  ])
)
