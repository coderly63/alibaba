const getData = (arg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`第${arg}次调用getData函数`);
      resolve(`wait 1s ... 第${arg}次调用getData函数`)
    }, 1000)
  })


let p = Promise.resolve()
for (let i = 1; i <= 10; i++) {
  p = p.then(() => getData(i))
}