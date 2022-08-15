let n, t, a, b
n = readInt()
t = readInt()
const arr = []
for (let i = 0; i < n; i++) {
  arr[i] = readInt()
}
let res = 0
let now = 0
arr.sort((a, b) => a - b)
for (let i = 0; i < arr.length; i++) {
  if (now + t <= arr[i]) now += t
  else res++
}
print(res)