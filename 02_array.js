//second largest number in an array
function toFindSecondLargest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  let ArrayWithoutFirstLargest = arr.filter((num) => num != max);
  let SortedArrayWithoutFirstLArgestNumber = ArrayWithoutFirstLargest.sort(
    (a, b) => a - b
  );
  return SortedArrayWithoutFirstLArgestNumber[
    SortedArrayWithoutFirstLArgestNumber.length - 1
  ];
}
console.log(toFindSecondLargest([5, 5, 5, 2]));
