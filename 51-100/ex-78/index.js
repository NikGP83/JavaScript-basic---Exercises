// Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3.

const checkArr = (arr) => arr.some((el) => el !== 1 && el !== 3);

console.log(checkArr([5, 6]));
console.log(checkArr([1, 3]));
