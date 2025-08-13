function flatAnArray(arr) {
  let result = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result.push(...flatAnArray(element)); // recursive call
    } else {
      result.push(element);
    }
  });
  return result; // ✅ return result
}

// Testing
console.log(flatAnArray([1, [2, 3]])); // [1, 2, 3]
console.log(flatAnArray([1, [2, [3, [4]]]])); // [1, 2, 3, 4]
console.log(flatAnArray([[], [1, [2]]])); // [1, 2]
console.log(flatAnArray([])); // []
console.log(flatAnArray([1, ["a", ["b", ["c"]]]])); // [1, 'a', 'b', 'c]
