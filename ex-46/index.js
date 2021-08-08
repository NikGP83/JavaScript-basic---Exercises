// Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11.

const checkNums = (a, b) => (a % 7 === 0 || a % 11 === 0) || (b % 7 === 0 || a % 11 === 0);

console.log(checkNums(50, 21));