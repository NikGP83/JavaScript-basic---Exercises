// Write a JavaScript program to create a new string of specified copies (positive number) of a given string. 

let sentence = `abracadabra  `;
let howManyCopies = 5;

const getStringCopies = (str, numOfCopies) => numOfCopies > 0 ? str.repeat(numOfCopies) : `введите число копий от одной и выше`;

console.log(getStringCopies(sentence, howManyCopies));