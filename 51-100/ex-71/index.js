// Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers. 
// The array length must be greater or equal to 1.

const checkNumInPosition = (arr) => arr.length > 1 ? arr[0] === 1 || arr[arr.length - 1] === 1 : false;

console.log(checkNumInPosition([1, 3, 5, 6]));
console.log(checkNumInPosition([3, 3, 5, 1]));
console.log(checkNumInPosition([3, 3, 5, 6]));