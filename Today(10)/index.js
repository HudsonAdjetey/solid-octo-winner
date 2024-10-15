console.log("Start");

// Job Queue -> Microtask queue
// Macro

console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise 1");
});

setTimeout(() => {
  console.log("Timeout 1");
},0);

Promise.resolve().then(() => {
  console.log("Promise 2");
});

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");


console.log("start")
console.log("end");
console.log("Promise 1");
console.log("Promise 2");
console.log("Timeout 1");
console.log("Timeout 2");