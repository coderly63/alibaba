function getMessage(input) {
  input = input + ' ' + input.split(' ').reverse().slice(1).join(' ')
  return input
    .split(' ')
    .map((item) => {
      item[0].toLocaleUpperCase()
      return item.slice(0, 1).toLocaleUpperCase() + item.slice(1)
    })
    .join(' ')
}

console.log(getMessage('you got a message'))
