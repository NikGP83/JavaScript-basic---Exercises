// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

const summOfIntgrs = (arr) => arr.reduce((a, s) => a + s);

console.log(summOfIntgrs([24, 45, 12]));
console.log(summOfIntgrs([0, 8, -12]));