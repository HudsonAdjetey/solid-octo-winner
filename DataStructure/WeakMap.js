let weakMap = new WeakMap();

let o1 = { name: "John" };

let o2 = { name: "Abena" };

// set
weakMap.set(o1, o2);

// get
console.log(weakMap.get(o1));

// has

console.log(weakMap.has(o1));

// delete

weakMap.delete(o1);

console.log(weakMap.has(o1));

// WeakMap does not keep the references to the objects, so if the object is garbage collected, the WeakMap entry will also be removed.

/* Example */
let weakMap2 = new WeakMap();

let nameObj = { name: "Holland" };

// The object is added to the WeakMap.
weakMap2.set(nameObj, "Metadata");
// The object is still referenced by the WeakMap, so it will not be garbage collected.
console.log(weakMap2.get(nameObj));

nameObj = null; // The object is now eligible for garbage collection.

console.log(weakMap2.get(nameObj));