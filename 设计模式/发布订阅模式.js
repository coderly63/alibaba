const eventBus = {
  list: [],
  subscribe(name, fn) {
    if (!this.list[name]) this.list[name] = []
    this.list[name].push(fn)
  },
  publish() {
    const args = arguments
    const name = Array.prototype.shift.call(args)
    const fnList = this.list[name]
    for (const fn of fnList) {
      fn.apply(this, args)
    }
  }
}