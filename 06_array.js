//count occuracy in given array
let fruits = ["apple", "apple", "banana", "apple", "banana"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count);
