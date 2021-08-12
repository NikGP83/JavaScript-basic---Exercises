// Write a JavaScript program to capitalize the first letter of each word of a given string. 

let sentence = `ходил бродил тупил`

const getCapitalizeChr = (str) => str.split(' ').map((el) => el.substr(0, 1).toUpperCase() + el.substr(1)).join(` `);    

console.log(getCapitalizeChr(sentence));