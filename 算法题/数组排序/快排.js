var swap = function (arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};
var partition = function (arr, left, right) {
  const pivot = left;
  let index = pivot; // index代表当前需要进行交换的位置
  for (let i = index + 1; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      index += 1;
      swap(arr, i, index);
    }
  }
  swap(arr, pivot, index);
  return index;
};
var quickSort = function (arr, left, right) {
  if (left < right) {
    const partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
};
const arr = [300, 15, 208993, 356, 254, 1234, 56, 99];
console.log(quickSort(arr, 0, arr.length - 1));
