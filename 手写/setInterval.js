const mySetInterval = function (fn, delay) {
  setTimeout(() => {
    fn()
    mySetInterval(fn, delay)
  }, delay);
}

function fn () {
  console.log('object');
}

mySetInterval(fn, 1000)