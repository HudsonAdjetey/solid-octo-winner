function multiply(a, b, c) {
  return a * b * c;
}

const result = multiply(2, 3, 4);
console.log(result);

const m1 = multiply.bind(2);
const m2 = m1(23, 43);
const partialMultiplyBy3 = multiply.bind(null, 3);
console.log(partialMultiplyBy3(34, 45));
const multiplyBy4 = partialMultiplyBy3.bind(null, 4);

console.log(multiplyBy4(2));

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(result);
  };
}

function nValue(n) {
  if (n === 0) return 1;
  return n * nValue(n - 1);
}

const factorial = memoize(function f(n) {
    if (n === 0) return 1;
    return n * f(n - 1)
});
console.log(factorial(5))
