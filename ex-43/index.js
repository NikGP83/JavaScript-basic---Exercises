// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

const checkThreeNums = (a, b, c) => a % 10 === b % 10 || b % 10 === c % 10 || a % 10 === c % 10;

console.log(checkThreeNums(13, 12, 13));