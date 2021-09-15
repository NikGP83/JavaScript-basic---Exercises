// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

const PIVOT = 100;
const distanceFromPivot = (a) => Math.abs(PIVOT - a);
const findNearestNum = (a, b) => (distanceFromPivot(a) > distanceFromPivot(b)) ? b : a;

console.log(findNearestNum(90, 170));