// For a deeper understanding of functional programming, write your own implementation of map(), filter(), reduce()

// Map function

const numbers = [1, 2, 3, 4, 5, 6, 7];

// const doubledNumbers = numbers?.map();
//  nm[0] * 2 = 2
//  nm[1] * 2 = 4
//  nm[2] * 2 = 6
//  nm[3] * 2 = 8
//  nm[4] * 2 = 12

// console.log(doubledNumbers); // [2, 4, 6, 8,10, 12, 14]

const callBack = function (num, idx) {
  return num * 2;
};

const newCloneOfMapCb = numbers.map((num, idx, arr) => {
  console.log(num === arr[idx]);
});

const newMap = (num, idx, arr) => {
  // let positionVal = num[idx]
  num = arr[idx];
};

function mapFn(arr, cb) {
  const newArr = [];

  for (let c = 0; c < arr.length; c++) {
    newArr.push(cb(arr[c], c, arr));
  }
  return newArr;
}

// console.log(mapFn(numbers, callBack));

const returnEven = numbers.filter((eve, idx, arr) => eve % 2 === 0);
// Filter
const filterFn = function (arr, cb) {
  const newArr = [];
  for (let c = 0; c < arr.length; c++) {
    //
    if (cb(arr[c], c, arr)) {
      newArr.push(arr[c]);
    }
  }
};

const myReducer = function (arr, cb, initialVal) {
  let accumulator = initialVal;

  for (let c = 0; c < arr.length; c++) {
    accumulator = cb(accumulator, arr[c], c, arr);
  }
  return accumulator;
};

console.log(myReducer([1, 2, 3], (acc, num) => acc + num, 0));
