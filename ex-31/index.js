// Write a JavaScript program to find the largest of three given integers.

const largestOfThreeIntgr = (a, b, c) => Math.max.apply(null,[a, b, c]);

console.log(largestOfThreeIntgr(12, 1000, 50));