const arrays = [1, 2, 3, 5, 6, 8];

const div2 = arrays.filter((num) => num % 2 == 0);
console.log(div2); // [2 , 6, 8]

/* const div2b = arrays.every((num) => num % 2 == 0);
console.log(div2b);
const div2a = arrays.some((num) => num % 2 == 0);
console.log(div2a); */

const dummyObj = {
  name: "John",
  age: 30,
  city: "New York",
};

const storeName = dummyObj["name"];
console.log(storeName);

let map = new Map();
/**
 * Set Method is used for passing key value arguments
 * @param(key: any data type, value: any data type)
 *
 * USE CASE
 * new Map().set(key, value)
 */

map.set("name", "Hudson");

/**
 * Get Method is used to get value of a key
 * @param(key: any data type)
 *
 */

const namePerson = map.get("name");
console.log(namePerson);

const storeIndex = {
  John: 1,
  Jane: 2,
  Bob: 3,
};
const storeValueIndex = {
  John: "New York",
  Bob: "Los Angeles",
};

let newMap2 = new Map();

newMap2.set(storeIndex, storeValueIndex);

console.log(newMap2.get(storeIndex));

/**
 * Object.entries() method returns an array of key-value pairs for each entry in the object.
 * @param(obj: any object)
 */

/**
 * .has(key)
 * Has accepts a key
 * @param(key)
 * @returns {boolean}
 */

const checkname = newMap2.has("name");
console.log(checkname);

// delete
/**
 *  .delete(key)
 * @params(key)
 */

// eg.
newMap2.delete(storeIndex);

console.log(newMap2.size);

/* Iteration 
forEach
*/

let mapData = new Map();

mapData.set("name", "John");
mapData.set("age", 30);

// size
/* console.log(mapData.size);
// get name
console.log(mapData.get("name"));
// get age
console.log(mapData.get("age"));
// check -> has
console.log(mapData.has("age"))
 */

console.log(typeof mapData);

mapData.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// for ...of
for (let [key, value] of mapData) {
  console.log(`${key}: ${value}`);
}
