const throttle = (func, delay) => {
  let previous = 0;
  return function () {
    const context = this;
    const args = [...arguments];
    const now = Date.now();
    if (now - previous >= delay) {
      func.apply(context, args);
      previous = now;
    }
  };
};
