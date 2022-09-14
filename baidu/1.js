const s = readline()
const arr = ['a', 'e', 'i', 'o', 'u']
let res = 0
for (let i = 0; i < s.length; i++) {
  const sub = s.slice(i, i + 5)
  if (check(sub)) res += 1
}
console.log(res)
function check(sub) {
  if (sub.length < 5) return false
  else if (sub[0] === sub[3]) return false
  else if (arr.includes(sub[0]) || arr.includes(sub[3])) return false
  else if (
    !arr.includes(sub[1]) ||
    !arr.includes(sub[2]) ||
    !arr.includes(sub[4])
  )
    return false
  else if (sub[1] === sub[2] || sub[1] === sub[4] || sub[2] === sub[4])
    return false
  else return true
}
