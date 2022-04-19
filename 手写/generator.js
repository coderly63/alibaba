const getData = (arg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`wait 1s ... 第${arg}次调用getData函数`);
    }, 1000);
  });

function* testG() {
  const data1 = yield getData(1);
  console.log(
    "🚀 ~ file: generator.js ~ line 10 ~ function*testG ~ data1",
    data1
  );
  const data2 = yield getData(2);
  console.log(
    "🚀 ~ file: generator.js ~ line 15 ~ function*testG ~ data2",
    data2
  );
  const data3 = yield getData(3);
  console.log(
    "🚀 ~ file: generator.js ~ line 15 ~ function*testG ~ data2",
    data3
  );
  return "success";
}

function asyncToGenerator(generatorFunc) {
  return function () {
    return new Promise((resolve, reject) => {
      // 获得迭代器
      const gen = generatorFunc();
      function step(arg) {
        const generatorResult = gen.next(arg);
        const { value, done } = generatorResult;
        if (done) return resolve(value)
        return Promise.resolve(value).then((res) => {
          step(res);
        });
      }
      step();
    });
  };
}

const test = asyncToGenerator(testG);
test().then((res) => {
  console.log("🚀 ~ file: generator.js ~ line 47 ~ test ~ res", res);
});
