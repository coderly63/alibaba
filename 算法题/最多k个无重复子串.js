const func = (s, k) => {
  let res = 0,
    left = 0
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    const rc = s[i] // 当前字母
    if (map.get(rc)) map.set(rc, map.get(rc) + 1)
    else map.set(rc, 1)
    while (map.size > k) {
      const lc = s[left]
      map.set(lc, map.get(lc) - 1)
      if (map.get(lc) === 0) map.delete(lc)
      left++
    }
    res = Math.max(res, i - left + 1)
  }
  return res
}

console.log(func('aabbbbcd', 2))
