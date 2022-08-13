class EventBus {
  constructor() {
    this.eventObj = {}
    this.id = 0
  }
  $on(name, callback) {
    if (!this.eventObj[name]) this.eventObj[name] = {}
    const id = this.id++
    this.eventObj[name][id] = callback
    return id
  }
  $emit(name, ...args) {
    const callbakList = this.eventObj[name]
    for (const id in callbakList) {
      if (Object.hasOwnProperty.call(callbakList, id)) {
        callbakList[id](args)
        if (id.indexOf('D') > -1) delete callbakList[id]
      }
    }
  }
  $off(name, id) {
    delete this.eventObj[name][id]
    if (Object.keys(this.eventObj[name]).length === 0)
      delete this.eventObj[name]
  }
  $once(name, callback) {
    if (!this.eventObj[name]) this.eventObj[name] = {}
    const id = 'D' + this.id++
    this.eventObj[name][id] = callback
    return id
  }
}

const bus = new EventBus()
const id = bus.$on('say', (name) => {
  console.log('my first name is ' + name);
})
bus.$once('say', (name) => {
  console.log('my last name is ' + name);
})
bus.$on('eat', (foot) => {
  console.log('i am eating' + foot);
})
bus.$emit('say', 'coderly')
bus.$off('say', id)
bus.$emit('say', 'Tom')