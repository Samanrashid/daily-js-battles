function toCheckEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

console.log(toCheckEmptyObject({})); // true
console.log(toCheckEmptyObject({ name: "Ali" })); // false
