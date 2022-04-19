var swap = function (arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};
var partition = function (arr, left, right) {
  const pivot = left;
  let index = pivot + 1; // index代表当前需要进行交换的位置
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index += 1;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
};
var quickSort = function (arr, left, right) {
  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
};
const arr = [300, 15, 208993, 356, 254, 1234, 56];
console.log(quickSort(arr, 0, arr.length - 1));
