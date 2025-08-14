function maxConsecutiveOnes(arr) {
  let maxCount = 0;
  let currentCount = 0;

  for (let num of arr) {
    if (num === 1) {
      currentCount++;
      if (currentCount > maxCount) maxCount = currentCount;
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
}

// Testing
console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1])); // 4
console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(maxConsecutiveOnes([0, 0, 0])); // 0
console.log(maxConsecutiveOnes([1, 1, 1, 1])); // 4
console.log(maxConsecutiveOnes([])); // 0
