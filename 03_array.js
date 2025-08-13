// removing duplicates from an array
function removeDuplicates(arr) {
  const a = new Set(arr);
  const s = Array.from(a);
  return s;
}
console.log(removeDuplicates([2, 3, 4, 1, 5, 5, 6, 7, 5, 1]));
