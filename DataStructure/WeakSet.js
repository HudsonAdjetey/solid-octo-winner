let weakSet = new WeakSet();

const newSet = new Set();
const addNewSet = newSet.add(12);
console.log(addNewSet.has(12));

// Add
let obj = { name: "Lyn" };
weakSet.add(obj);

// has

console.log(weakSet.has(obj));

// delete
weakSet.delete(obj);
console.log(weakSet.has(obj));
