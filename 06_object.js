const arrays = [4, 5, 6, 4, 5, 4];
const count = arrays.reduce((acc, array) => {
  acc[array] = (acc[array] || 0) + 1;
  return acc;
}, {});
console.log(count);
