function add(x) {
  return function (y) {
    return x + y;
  };
}

function add2(x,y) {
  return x + y;
}

const add2Result = add2(90,20)
console.log(add2Result)

const add5 = add(5);
console.log(add5(10)); // 15

const sumVals = add(5)(90);
console.log(sumVals); // 95

