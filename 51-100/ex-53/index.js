// Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
const sentence = `indialib`;
let range = 3;

const findSeparetedChr = (str) => {
    const searchElemOne = str.indexOf(`a`);
    const searchElemTwo = str.indexOf(`b`);
    return searchElemOne + range === searchElemTwo || searchElemTwo - range === searchElemOne;
}

console.log(findSeparetedChr(sentence));