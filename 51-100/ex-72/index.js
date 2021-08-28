// Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3.

const checkFirstAndLastNums = (arr) => arr[0] === arr[2];

const checkMorePositions = (arr) => arr.some((el) => el[0] === el[arr.length - 1]);

console.log(checkFirstAndLastNums([20, 30, 20]));
console.log(checkFirstAndLastNums([20, 30, 40]));
console.log(checkMorePositions([20, 30, 40, 49, 8, 20]));