function format(number) {
  const str = String(number)
  let res = ''
  const reg = /\d{1,3}(?=(\d{3})+$)/g
  str.replace(/(-?)(\d+).?(\d+)/g, (match, s1, s2, s3) => {
    console.log('str.replace ~ s2', s2)
    res = s1 + s2.replace(reg, '$&,') + (s3 ? '.' + s3 : '')
  })
  return res
}

console.log(format(-1234567895.1234));