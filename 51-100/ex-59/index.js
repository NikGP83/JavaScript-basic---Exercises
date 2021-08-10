// Write a JavaScript program to extract the first half of a string of even length.

let sentence = `творческий`;

const getHalfStr = (str) => {
    let halfWordLength = Math.round(str.length / 2);
    return str.slice(0, halfWordLength);
}

console.log(getHalfStr(sentence));