// Write a JavaScript program to create a new string without the first and last character of a given string.

const sentence = `jupiter`;

const cutTheFirsAndLast = (str) => str.slice(1, -1);

console.log(cutTheFirsAndLast(sentence));