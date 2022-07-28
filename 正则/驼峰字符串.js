function camelCase(str) {
  const reg = /[-_\s](.)?/g
  let res = ''
  res = str.replace(reg, (match, c) => {
    console.log('res=str.replace ~ match', match)
    return c.toUpperCase()
  })
  console.log(res);
  return res
}

camelCase('foo_bar-test')
camelCase('foo-bar')
camelCase('foo bar')