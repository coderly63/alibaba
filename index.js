class EventBus {
  constructor() {
    this.events = {}
  }
  subscribe (key, fn) {
    if (!this.events[key]) this.events[key] = []
    this.events[key].push(fn)
  }
  publish (key) {
    const fnList = this.events[key]
    const args = [].slice.call(arguments)
    for (const fn of fnList) {
      fn.apply(this, args)
    }
  }
}