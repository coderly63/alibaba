const repeatFunc = repeat(console.log, 4, 1000);


repeatFunc("helloworld");

// 每3秒打印一个helloworld，总计执行4次

function repeat(fn, count, timeout) {
  return async function (str) {
    for (let i = 0; i < count; i++) {
      await foo(fn, str, timeout)
    }
  }
}
// 追加，换成使用promise实现
function foo(fn, str, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fn(str)
      resolve()
    }, timeout);
  })
}