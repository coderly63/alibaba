const url =
  'http://www.baidu.com/?user=leaf&age=10&id=123&city=%E5%8C%97%E4%BA%AC&city=%E4%B8%8A%E6%B5%B7'
const decodeString = url.split('?')[1]
const objArr = decodeString.split('&')
const res = {}
for (const obj of objArr) {
  let [name, value] = obj.split('=')
  value = Number.isNaN(Number(value)) ? value : Number(value)
  if (Number.isNaN(Number(value))) value = decodeURI(value)
  else value = Number(value)
  if (!res.hasOwnProperty(name)) res[name] = value
  else if (res[name] instanceof Array) res[name].push(value)
  else res[name] = [res[name], value]
}
console.log(res)