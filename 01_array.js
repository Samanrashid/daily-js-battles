// demo commit
// Reverse an array without using reverse
function reverseArray(arr) {
  let reverseArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(arr[i]);
  }
  return reverseArray;
}
console.log(reverseArray([2, 3, 1]));
