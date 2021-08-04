// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). 
// Return true if either of them are in the said range.

let rangeMin = 50;
let rangeMax = 99;

const checkTwoNums = (a, b) => (a >= rangeMin && a <= rangeMax) || (b >= rangeMin && b <= rangeMax);

console.log(checkTwoNums(70, 20));