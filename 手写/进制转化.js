function numberConversion(num, base) {
  const dict = {}
  for (let i = 0; i < base; i++) {
    if (i < 10) dict[i] = i
    else {
      const c = String.fromCharCode(87 + i)
      dict[i] = c
    }
  }
  console.log(dict);
  const res = []
  while (num) {
    const t = num % base
    res.unshift(dict[t])
    num = Math.floor(num / base)
  }
  console.log(res);
  return res.join('')
}

console.log(numberConversion(45, 16));
