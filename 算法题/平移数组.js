// var translateArray = (arr, k) => {
//   const tmp = [...arr]
//   const n = arr.length
//   k = k % n
//   for (let i = 0; i < n; i++) {
//     arr[i] = tmp[(i - k + n) % n]
//   }
//   return arr
// }

var translateArray = (arr, k) => {
  const n = arr.length
  k = k % n
  let t = arr[n - 1]
  const translateOne = (arr) => {
    for (let i = n - 1; i >= 0; i--) {
      if (i === 0) arr[i] = t
      else arr[i] = arr[i - 1]
    }
  }
  while (k--) {
    translateOne(arr)
  }
  return arr
}



console.log(translateArray([1, 2, 3, 4, 5], 10));