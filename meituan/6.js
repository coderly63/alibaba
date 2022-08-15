function minimumDeviation(nums) {
  const n = nums.length
  const q = []
  let res = Number.MAX_SAFE_INTEGER
  let min = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 !== 0) nums[i] *= 2
    q.push(nums[i])
    min = Math.min(min, nums[i])
  }
  while (q.length) {
    q.sort((a, b) => a - b)
    const top = q.pop()
    res = Math.min(res, top - min)
    if (top & 1) break
    min = Math.min(min, top / 2)
    q.push(top / 2)
  }
  return res
}

console.log(minimumDeviation([1, 2, 3, 4]));
