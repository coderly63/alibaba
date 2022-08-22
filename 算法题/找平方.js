const findPow = function (n) {
  let i = 1, j = n - 1
  while (i <= j) {
    const sum = i * i + j * j
    if (sum === n) return [i, j]
    else if (sum < n) i += 1
    else j -= 1
  }
  return []
}

console.log(findPow(50));