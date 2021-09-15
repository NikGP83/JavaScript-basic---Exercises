// Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.


const replaceLastThreeChr = (str) => str.length > 3 ? str.slice(-3) + str.slice(0, -3) : false;

console.log(replaceLastThreeChr(`кеша`));

