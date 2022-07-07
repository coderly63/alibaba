const arr = [1, 123, 3523, 2345, 1234, 23]
const iteratorObj = arr[Symbol.iterator]
console.log(iteratorObj)
iteratorObj.next()