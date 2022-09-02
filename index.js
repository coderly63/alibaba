function foo() {
  console.log(123);
}

new Function('return ' + foo.toString())()