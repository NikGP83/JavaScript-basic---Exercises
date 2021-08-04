// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive).
//  Return true if one or more of them are in the said range.

let rangeMin = 50;
let rangeMax = 99;

const checkArrNums = (...arg) => arg.map((el) => (el >= rangeMin && el <= rangeMax));

console.log(checkArrNums(70, 20, 1000, 90));