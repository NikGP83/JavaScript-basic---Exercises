// Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string 
// if the first or last character are 'P'. Return the original string if the condition is not satisfied.

const strWithoutChr = (str) => str.substr(0, 1) === `P` && str.substr(str.length - 1) === `P` ? str.slice(1, -1) : str

console.log(strWithoutChr(`ProudP`));