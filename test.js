function a(x, y, z, q) {
  console.log(this, x, y, z, q);
}

a.bind({}, 'a', 'b')('c', 'd')