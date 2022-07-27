function foo() {
  console.log(Date.now());
  setTimeout(() => {
    foo()
  })
}

foo()