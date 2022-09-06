
// 定义几个中间间函数
const m1 = async (req, res, next) => {
  console.log('m1 run')
  await next()
  console.log('m1 end');
}

const m2 = async (req, res, next) => {
  console.log('m2 run')
  await getPromise(4, 500)
  const m3Res = await next()
  console.log('m2 ~ m3Res', m3Res)
  console.log('m2 end');
}

const m3 = async (req, res, next) => {
  console.log('m3 run')
  await next()
  console.log('m3 end');
  return '9999999'
}

// 中间件集合
const middlewares = [m1, m2, m3]

function useApp(req, res) {
  const next = () => {
    // 获取第一个中间件
    const middleware = middlewares.shift()
    if (middleware) return Promise.resolve(middleware(req, res, next))
    else return Promise.resolve('end')
  }
  next()
}

// 第一次请求流进入
useApp()

function getPromise(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(value);
      resolve(value)
    }, delay);
  })
}