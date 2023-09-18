const behaviors = (target) => {
  console.log(`${target.name}, 在吃饭`)
  console.log(`${target.name}, 在睡觉`)
  console.log(`${target.name}, 在打豆豆`)
}

@behaviors
class Cat {}

@behaviors
class Dog {}

const cat = new Cat()
console.log(cat)

const dog = new Dog()
console.log(dog)

// 内容输出如下
// Cat, 在吃饭
// Cat, 在睡觉
// Cat, 在打豆豆
// Dog, 在吃饭
// Dog, 在睡觉
// Dog, 在打豆豆
console.log(456)
console.log(123)
