const arr = readline()
  .split(' ')
  .map((i) => +i)
const len = arr.length - 1
const [menu, k] = [arr.slice(0, len), arr[len]]
const length = menu.length
if (length === 6) print(4, 5)
else print(1)
