// Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.

const checkNumsInArr = (arr) => arr.some((el) => el === 1 || el === 3);

console.log(checkNumsInArr([2, 3]));