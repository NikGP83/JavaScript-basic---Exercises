// Write a JavaScript program to find the largest of three given integers.

const largestOfThreeIntgr = (...arr) => Math.max.apply(null, arr);

console.log(largestOfThreeIntgr(12, 1000, 50));