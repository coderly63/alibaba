const p = new Promise((resolve, reject) => {
  const n = Math.floor(Math.random() * 100);
  if (n % 2 === 0) resolve(n);
  else reject(n);
});
p.then(
  (res) => {
    console.log(res);
  },
  (error) => {
    console.log("error", error);
  }
);
