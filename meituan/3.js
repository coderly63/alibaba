function getArea(p1, p2, p3, p4) {
  function getInstance(x1, x2, y1, y2) {
    const x = Math.abs(x1 - y1)
    const y = Math.abs(x2 - y2)
    return Math.sqrt(x * x + y * y)
  }
  const d12 = getInstance(p1.x, p1.y, p2.x, p2.y)
  const d23 = getInstance(p2.x, p2.y, p3.x, p3.y)
  const d34 = getInstance(p3.x, p3.y, p4.x, p4.y)
  const d41 = getInstance(p4.x, p4.y, p1.x, p1.y)
  const d24 = getInstance(p2.x, p2.y, p4.x, p4.y)
  const k1 = (d12 + d41 + d24) / 2
  const k2 = (d23 + d34 + d24) / 2
  const s1 = Math.sqrt(k1 * (k1 - d12) * (k1 - d41) * (k1 - d24))
  const s2 = Math.sqrt(k2 * (k2 - d23) * (k2 - d34) * (k2 - d24))
  const s = s1 + s2
  return s.toFixed(0)
}
