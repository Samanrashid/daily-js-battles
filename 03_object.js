function mergeTwoObj(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
console.log(mergeTwoObj({ name: "Ali", age: 25 }, { age: 30, city: "Delhi" }));
