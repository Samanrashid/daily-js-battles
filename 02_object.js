function toCountNumberOfKeys(obj) {
  let count = 0;
  for (item of Object.keys(obj)) {
    count = count + 1;
  }
  return count;
}
console.log(toCountNumberOfKeys({ name: "Saman", age: 23 }));
