function swapKeyValueObject(obj) {
  let swapped = {};
  for (let [key, value] of Object.entries(obj)) {
    swapped[value] = key;
  }
  return swapped;
}

console.log(swapKeyValueObject({ name: "Saman", age: 25, college: "Jamia" }));
