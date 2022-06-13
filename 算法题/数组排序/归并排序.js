var merge = function (left, right) {
  const res = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) res.push(left.shift());
    else res.push(right.shift());
  }
  while (left.length) res.push(left.shift());
  while (right.length) res.push(right.shift());
  return res;
};
var mergeSort = function (arr) {
  const n = arr.length;
  if (n === 0) return;
  if (n === 1) return arr;
  const middle = Math.floor(n / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([30, 15, 208993, 356, 254, 1234, 56]));
