// Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.

const checkTwoNums = (a, b) => (a === 15 || b === 15) || (a + b === 15) || (Math.abs(a - b) === 15);

console.log(checkTwoNums(40, 40));