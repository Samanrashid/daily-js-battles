function findPairsBruteForce(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}

console.log(findPairsBruteForce([1, 5, 7, -1, 5], 6)); // [[1,5],[7,-1],[1,5]]
