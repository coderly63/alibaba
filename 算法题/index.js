const str = "   this    is a   dog".trim()
const arr = str.split(/\s+/)
console.log('arr', arr)
console.log(arr.reverse().join(""));