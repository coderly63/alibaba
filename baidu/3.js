// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
process.stdin.resume()
process.stdin.setEncoding('ascii')

var input = ''
var input_array = ''

process.stdin.on('data', function (data) {
  input += data
})

process.stdin.on('end', function () {
  input_array = input.split('\n')
  var nLine = 0
  let n
  while (nLine < input_array.length) {
    var line = input_array[nLine++].trim()
    if (line === '') {
      continue
    }
    if (nLine === 1) {
      n = +line
      continue
    } else {
      const arr = line.split(' ').map((i) => +i)
      const arr0 = []
      const arr1 = []
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) arr0.push(arr[i])
        else arr1.push(arr[i])
      }
      const res = []
      if (arr0.length && arr1.length) {
        if (arr0.length > arr1.length) {
          res.push(arr0.pop())
          res.push(arr1.pop())
        } else {
          res.push(arr1.pop())
          res.push(arr0.pop())
        }
      }
      if (arr0.length) res.push(...arr0)
      if (arr1.length) res.push(...arr1)
      console.log(res.join(' '));
      break
    }
  }
})
