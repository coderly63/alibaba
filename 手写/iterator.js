let range = {
  from: 1,
  to: 5,
}

// 1. for..of 循环首先会调用对象上的 [Symbol.iterator] 属性——range[Symbol.iterator]()，
// 属性 range[Symbol.iterator] 称为“迭代对象生成器”或“迭代对象生成函数”
range[Symbol.iterator] = function () {
  // range[Symbol.iterator]() 的调用结果，会返回一个包含 next 方法的对象，
  // 这个对象称为“迭代对象”
  // 2. 接下来, for..of 就是完全在跟这个迭代对象打交道了
  return {
    current: this.from,
    last: this.to,

    // 3. 每次 for..of 循环一次，就要调用一次 next 方法
    next() {
      // 4. 从 next 方法返回的对象中，我们能获得当前遍历的值（value）以及遍历是否结束的标记（done）
      console.log(this)
      if (this.current <= this.last) {
        return { done: false, value: this.current++ }
      } else {
        return { done: true }
      }
    },
  }
}

// for (const iterator of range) {
//   console.log('🚀 ~ file: iterator.js ~ line 29 ~ iterator', iterator)
// }

const arr = [234, 245, 1234, 132, 3413, 131, 23]
arr[Symbol.iterator] = function () {
  const context = this
  let i = 0
  return {
    next: function () {
      const done = i >= context.length
      const value = done ? undefined : context[i++]
      return {
        done,
        value,
      }
    },
  }
}
// for (const iterator of arr) {
//   console.log(iterator)
// }
