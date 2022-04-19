function debounce(fn, delay) {
  let timer = null;
  return function () {
    if (timer) clearTimeout(timer);
    const context = this;
    console.log("🚀 ~ file: 防抖.js ~ line 6 ~ context", context);
    const args = [...arguments];
    console.log("🚀 ~ file: 防抖.js ~ line 8 ~ args", args);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

function func() {
  console.log(123);
}

const debounceFunc = debounce(func, 200);
const a = {
  0: 123,
  1: 456,
};
debounceFunc.apply(a, [1, 2, 3]);
debounceFunc(1, 2, 3, 4);
debounceFunc(1, 2, 3, 4, 6);
