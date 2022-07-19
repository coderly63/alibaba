class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  say() {
    console.log(this.name, 'saying');
  }
}
Person.eat = function () {
  console.log('eating');
}

const p = new Person('Tom', 34)
Person.say()