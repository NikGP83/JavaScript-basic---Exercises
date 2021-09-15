// Write a JavaScript program to test whether a string end with "Script". The string length must be greater or equal to 6.

const sentence = `BlaBlaBlaScript`;
const wrongSentense = `dfgkldfgjkdfgjdfklj`

const checkPartOfWord = (str) => str.length > 6 ? str.slice(-6) === `Script` : false;

console.log(checkPartOfWord(sentence));
console.log(checkPartOfWord(wrongSentense));