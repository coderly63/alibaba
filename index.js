const p = new Promise((resolve) => {
    resolve(1)
})
p.then(res => {
    console.log(res);
})
p.then(res => {
    console.log(res);
})