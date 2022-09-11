function converseNum(num) {
  const strNum = String(num)
  const unit = '十百千万十百千亿十百千'
  const chineseNum = '零一二三四五六七八九'
  const res = ['@']
  let unitIndex = 0
  for (let i = strNum.length - 1; i > 0; i--) {
    res.unshift(chineseNum[strNum[i]])
    res.unshift(unit[unitIndex++])
  }
  res.unshift(chineseNum[strNum[0]])
  console.log(res);
  return res.join('').replace(/零[十百千]/g, '零').replace(/零{2,}/, '零').replace(/零([万亿])/, '$1').replace(/零*@/, '')
}

console.log(converseNum(12300080));