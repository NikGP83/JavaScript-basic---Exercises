// Write a JavaScript program to convert the letters of a given string in alphabetical order

let sentence = `гулять`;

const getAlphabetOrder = (str) => str.split(``).sort().join(``);

console.log(getAlphabetOrder(sentence));