
const myAjax = function (url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return
      if (xhr.status === 200 || xhr.status === 304) resolve(xhr.responseText)
      else reject(new Error(xhr.responseText))
    }
    xhr.send()
  })
}

myAjax('https://smallpig.site/api/category/getCategory')