const obj = {}
for (let i = 0; i < 16; i++) {
  if (i >= 10) obj[String.fromCharCode(i + 87)] = i 
  else obj[i] = i
}
console.log(obj);