// Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
const sentence = `indialib`;


const findSeparetedChr = (str) => {
    const searchElemOne = str.indexOf(`a`);
    const searchElemTwo = str.indexOf(`b`);
    return searchElemOne + 3 === searchElemTwo || searchElemTwo - 3 === searchElemOne;
}

console.log(findSeparetedChr(sentence));