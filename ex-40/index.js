// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

const checkIntegers = (x, y) => x === 8 || y === 8 || x + y === 8 || Math.abs(x - y === 8);

console.log(checkIntegers(4, 4));