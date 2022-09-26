function foo(str) {
  const reg = /[-_](\w)/gi
  const res = str.replace(reg, (match, s) => {
    console.log('res ~ s', s)
    return s.toLocaleUpperCase()
  })
  console.log(res);
}


foo('this_is_a_bus')