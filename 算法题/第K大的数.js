function swap(arr, i, j) {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}

function partition(arr, left, right) {
  const pivot = left
  let index = pivot
  for (let i = left + 1; i < right; i++) {
    if (arr[i] < arr[pivot]) {
      index += 1
      swap(arr, index, i)
    }
  }
  swap(arr, pivot, index)
  return index
}

function quickSort(arr, left, right, k) {
  if (left >= right) return arr
  const index = partition(arr, left, right)
  console.log('quickSort ~ index', index)
  if (index + 1 === k) return arr[index]
  if (k < index + 1) return quickSort(arr, left, index, k)
  if (k > index + 1) return quickSort(arr, index + 1, right, k)
}

const arr = [1, 3, 43, 561, 14, 42, 9, 99]
console.log(quickSort(arr, 0, arr.length, 3))
