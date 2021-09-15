// Write a JavaScript program to create a new string using the first and last n characters from a given sting. 
// The string length must be greater or equal to n.

const createNewStrFromAnother = (str, n) => str.length >= n ? str.slice(0, n) + str.slice(-n) : false;

console.log(createNewStrFromAnother(`Indonesia`, 3));
console.log(createNewStrFromAnother(`Ind`, 4));
console.log(createNewStrFromAnother(`Forpost`, 2));