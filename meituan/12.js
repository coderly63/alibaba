const t = ['q', 'w', 'k', 'h', 'j']
var n = parseInt(readline());
const queue = []
const arr = []
for (var i = 0; i < n; i++) {
  s = readline()
  arr.push(s)
}
for (let i = 0; i < arr.length; i++) {
  const s = arr[i]
  if (queue.length >= 10) queue.shift()
  if (!checkY(s) && !queue.includes(s)) console.log('no');
  else console.log('yes');
  queue.push(s)
}

function checkY(s) {
  if (s.length <= 5) return false
  let ans = 0
  for (let i = 0; i < s.length; i++) {
    if (i <= 5 && t.includes(s[i])) {
      ans += 1
      if (ans > 5) return true
      continue
    }
    if (t.includes(s[i - 6])) ans -= 1
    if (t.includes(s[i])) ans += 1
    if (ans > 5) return true
  }
  return false
}
console.log(checkY(''));