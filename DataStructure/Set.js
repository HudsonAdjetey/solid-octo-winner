let set = new Set();
/**
 * Add -> Is a collection of unique of values. It automatically removes duplicates
 * @param
 */

// add values
set.add(1);
set.add(5);
set.add(1); // Won't be added again

// has -> takes in a value has the argument
console.log(set.has(5));

// delete  -> removes the value from the set

// set.delete(5);
console.log(set.has(5));

// clear -> removes all the values from the set

// set.clear();
console.log(set.size);

// Iterate => forEach

set.forEach((s) => {
  console.log(s);
});

for (let value of set) {
  console.log(value);
}

// Convert to array

let arr = Array.from(set);
console.log(arr);

let desArr = [...set];
console.log(desArr);

// Set operations

/* let set2 = new Set([2, 3, 4]);
let union = new Set([...set,...set2]);
console.log(union);

let intersection = new Set([...set].filter((x) => set2.has(x))); */
