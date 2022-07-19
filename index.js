// 定义几个中间间函数
const m1 = (req, res, next) => {
  setTimeout(() => {
    console.log('m1 run')
    next()
  }, 2000);
}

const m2 = (req, res, next) => {
  console.log('m2 run')
  next()
}

const m3 = (req, res, next) => {
  console.log('m3 run')
  next()
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

Promise.resolve(Promise.resolve(Promise.resolve(Promise.resolve(2)))).then(res => {
  console.log(res);
})