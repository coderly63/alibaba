function diffTime(startDate, endDate) {
  console.log(new Date(startDate));
  console.log(new Date(endDate));
  const diff = endDate - startDate
  const diffDay = Math.floor(diff / (1000 * 24 * 3600))
  console.log('diffTime ~ diffDay', diffDay)
  const diffHours = Math.floor(diff % (1000 * 24 * 3600) / (1000 * 3600))
  console.log('diffTime ~ diffHours', diffHours)
  const diffMinute = Math.floor(diff % (1000 * 24 * 3600) % (1000 * 3600) / (1000 * 60))
  console.log('diffTime ~ diffMinute', diffMinute)
  const diffSeconds = Math.floor(diff % (1000 * 24 * 3600) % (1000 * 3600) % (1000 * 60) / (1000))
  console.log('diffTime ~ diffSeconds', diffSeconds)
  console.log(`相差${diffDay}天${diffHours}小时${diffMinute}分钟${diffSeconds}秒数`);
}

diffTime(1658646245000, 1658646246000)
console.log(Date.now());