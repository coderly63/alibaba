const line = read_line()
const time = line.split(' ')
console.log(formateTime(parseInt(time[0]), line.slice(14)))
function formateTime(timestamp, format) {
  const date = new Date(timestamp)
  const Y = date.getFullYear().toString()
  const m = (date.getMonth() + 1).toString()
  const d = date.getDate().toString()
  const H = date.getHours().toString()
  const M = date.getMinutes().toString()
  const S = date.getSeconds().toString()
  const res = format
    .replace(/yyyy/gi, Y)
    .replace(/MM/gi, m)
    .replace(/dd/gi, d)
    .replace(/HH/gi, H)
    .replace(/mm/gi, M)
    .replace(/ss/gi, S)
  return res
}
