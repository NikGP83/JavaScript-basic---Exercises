// Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.

const checkThreeNums = (a, b, c) => a >= 20 && (a < b || a < c) || b >= 20 && (b < c || b < a) || c >= 20 && (c < b || c < a);

console.log(checkThreeNums(100, 10, 10));