function findMinDifference(timePoints) {
  let res = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < timePoints.length; i++) {
    for (let j = i + 1; j < timePoints.length; j++) {
      const startArr = timePoints[i].split(':')
      const startH = parseInt(startArr[0])
      const startM = parseInt(startArr[1])
      const endArr = timePoints[j].split(':')
      const endH = parseInt(endArr[0])
      const endM = parseInt(endArr[1])
      const startMin = startH * 60 + startM
      const endMin = endH * 60 + endM
      let tmp = endMin - startMin
      if (tmp < 0) tmp += 24 * 60
      res = Math.min(res, tmp)
    }
  }
  return res
}

console.log(findMinDifference(['23:59', '00:00']));
