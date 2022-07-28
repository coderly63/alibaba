class Scheduler {
  constructor(maxNum) {
    this.maxNum = maxNum
    this.currentNum = 0
    this.queue = []
  }
  async add(promiseCreator) {
    if (this.currentNum >= this.maxNum) {
      await new Promise(resolve => {
        this.queue.push(resolve)
      })
    }
    this.currentNum++
    await promiseCreator()
    this.currentNum--
    if (this.queue.length > 0) this.queue.shift()()
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })
const scheduler = new Scheduler(2)
const addTask = (time, val) => {
  scheduler.add(() => {
    return timeout(time).then(() => {
      console.log(val)
    })
  })
}
addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
