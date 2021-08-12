// Write a JavaScript program to count the number of vowels in a given string

let sentence = `однопоточный`;

const getVovelsCount = (str) => str.replace(/[бвгджзйклмнпрстфхцчшщ]/g, ``).length;

console.log(getVovelsCount(sentence))