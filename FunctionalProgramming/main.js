const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

const stringVal = null;
const dummyFns = stringVal?.split(" ")?.join(",");
console.log(dummyFns);

/* mapping */
const doubledNumbers = arrayOfNumbers?.map((nums) => nums * 2);
console.log(doubledNumbers);

/* You have an array of numbers representing the price of products before
tax. Using map(), write a function that  calculates the price of each product after applying a 10% tax.
 */

const price = [32, 43, 56, 7, 8];
const tax = price?.map((t) => t * 0.1);

console.log(tax);

// FILTERING
const numbers2 = [1, 2, 3, 4, 5, 6];

const even = numbers2.filter((number) => number % 2 == 0);

const find6 = numbers2.find((number) => number === 6);

console.log(even);

/* 
Given an array of ages, use filter() to create a new array that contains
 only the people who are above 18 years old.
*/

const ages = [12, 16, 18, 24, 30, 40];
const eligibleToVote = ages.filter((age) => age >= 18);
console.log(eligibleToVote);

let startNumber = 0;
const obj1 = {
  name: "Homeboy",
  price: 20,
};
const reduceFn = ages.reduce((acc, age) => acc + age, 0);
console.log(reduceFn);

/* 
    You have an array of scores for a class. Use reduce() to calculate the average score
*/
const scores = [12, 16, 18, 24, 30, 40];

///the number of students to use for dividing the total to get the average

const numberofStudents = scores.length;

const solution = scores.reduce((acc, mark) => {
  const total = acc + mark;
  const average = total / numberofStudents;

  return average;
}, 0);

console.log(solution);

/* 
func --> func{args} --> func{result}
*/

function multiplyBy(factor) {
  return function (number) {
    return number + factor;
  };
}

const firstCall = multiplyBy(6);
const total = firstCall(4);
console.log(total);

const newAllFn = multiplyBy(6)(4);
console.log(newAllFn);

/* function bySomething(nameValue) {
  "use strict";
  return function (firstName) {
    console.log("Lyn");
    console.log(firstName);
    return function (lastName) {
      console.log("Tekle");
      console.log(lastName);
      return function () {
        console.log("Something here");
        return firstName + lastName + nameValue;
      };
    };
  };
} */

/* 
parent(nameValue) ==> first inner function(firstName) ==> second inner function(lastName) ==> last function() <--> firstName + lastName + nameValue
*/

/* const parent1 = bySomething("Kwame");
const firstInner = parent1("Joshua");
const secondInner = firstInner("Celestina");
console.log(secondInner());

bySomething("Kwame")("Joshua")("Celestina")() */

// const childFn =  parentFn("Second")

// const multiplyByTwo = multiplyBy(2)

/* 
write a high order function that takes a comparison function as an argument and returns a function that sorts an array based on the comparison
*/

function sorting(comparisonFn) {
  return function (array) {
    return array.sort(comparisonFn);
  };
}

const numbers = [2, 5, 7, 9, 11, 1];
const ascending = (num1, num2) => num1 - num2;
const descending = (num1, num2) => num2 - num1;

const sortingascending = sorting(ascending);
console.log(sortingascending(numbers));

const ascendingOrder = sorting((a, b) => a - b);
const descendingOrder = sorting((a, b) => b - a);
console.log(descendingOrder(numbers));

/* 
    You have an array of transactions where each transactions has an amount and a type (either "income" or "expense"). Write a function to calculate the total expense using functional programming
*/

const transactions = [
  { amount: 100, type: "expense" },
  { amount: 200, type: "expense" },
  { amount: 50, type: "income" },
  { amount: 300, type: "expense" },
  { amount: 150, type: "income" },
];

const filterExpenses = transactions.filter(
  (transact) => transact.type === "expense"
);

const totalExpenses = filterExpenses.reduce(
  (acc, expense) => acc + expense.amount,
  0
);

console.log(totalExpenses);

let totalValues = 0;

for (let i = 0; i < transactions.length; i++) {
  if (transactions[i].type === "expense") {
    totalValues += transactions[i].amount;
  }
}

console.log(totalValues);







// For a deeper understanding of functional programming, write your own implementation of map(), filter(), reduce()
