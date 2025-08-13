function zeroToEnd(arr) {
  let arrayWithoutZero = [];
  let arrayWithZero = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] != 0) {
      arrayWithoutZero.push(arr[index]);
    } else {
      arrayWithZero.push(arr[index]);
    }
  }
  let result = [...arrayWithoutZero, ...arrayWithZero];
  console.log(result);
}
zeroToEnd([0, 1, 0, 3, 12]);
