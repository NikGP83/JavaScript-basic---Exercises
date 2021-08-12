// Write a JavaScript program to check three given numbers, 
// if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

const checkNubrs = (a, b, c) => a === b && a === c ? 30 : a !== b || a !== c || b !== c ? 40 : 20;

console.log(checkNubrs(1 ,2 ,1 ));