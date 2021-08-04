// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum. 

const getIntgSum = (a, b) => a === b ? (a + b) * 2 : a + b;

console.log(getIntgSum(20, 20));