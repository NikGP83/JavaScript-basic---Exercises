// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

const alfb = (`абвгдеёжзийклмнопрстуфхцчшщъыьэюя`);

// const changeChrs = (str) => {
//     let result = [];
//     let strIndArr = str.split('').map((chr) => alfb.indexOf(chr))
//     strIndArr.forEach((el) => result.push(alfb[el + 1]))
//     return result.toString()
// };


const SHIFT = 1;

const rot = (ix) =>ix%alfb.length;

const shift = (ix) =>ix +SHIFT;

const shiftChar = (ch)=>alfb[rot(shift(alfb.indexOf(ch)))];

const encryptCesar = (str) => [...str].map(shiftChar);

console.log(encryptCesar(`я`));
