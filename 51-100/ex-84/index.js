// Write a JavaScript to replace each character of a given string by the next one in the English alphabet.  
// Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

const alphabeth = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const replaceEachChrts = (str) =>str.split('').map((el, i) => el === 'z' ? 'a' : alphabeth[(alphabeth.indexOf(el) + 1)]).join(``);

console.log(replaceEachChrts(`starsz`));

