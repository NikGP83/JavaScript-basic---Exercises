// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

const alfb = (`абвгдеёжзийклмнопрстуфхцчшщъыьэюя`);

const changeChrs = (str) => {
    let result = [];
    let strIndArr = str.split('').map((chr) => alfb.indexOf(chr))
    let  = strIndArr.forEach((el) => result.push(alfb[el + 1]))
    return result.toString()
};

console.log(changeChrs(`арбуз`));