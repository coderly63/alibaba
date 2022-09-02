function foo(s) {
  const map = new Map()
  const n = s.length
  for (let i = 0; i < n; i++) {
    const c = s[i]
    const num = (map.get(c) || 0) + 1
    map.set(c, num)
  }
  const arr = [...map.keys()].sort((a, b) => {
    const countB = map.get(b)
    const countA = map.get(a)
    if (countA !== countB) return map.get(b) - map.get(a)
    else return a.charCodeAt() - b.charCodeAt()
  })
  console.log(arr);
}

foo('abczcabdfe')
