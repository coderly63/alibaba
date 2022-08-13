const p = new Promise((resolve, reject) => {
  reject(6)
})
  .then(
    (res) => {
      console.log('res1', res)
    },
    (err) => {
      console.log('err1', err)
    }
  )
  .then(
    (res) => {
      console.log('res2', res)
    },
    (err) => {
      console.log('err2', err)
    }
  )
