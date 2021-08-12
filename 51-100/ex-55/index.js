// Write a JavaScript program to check whether a given string contains equal number of p's and t's.

let sentence = `aorpreegpghptdkfjt`;

let chrP = 0;
let chrT = 0;

const getCountChrs = (str) => str.split(``).forEach((chr) => chr === `p` ? chrP++ : chr === `t` ? chrT++ : null);

getCountChrs(sentence);

console.log(`Колличество букв t:${chrT}`, `Колличество букв p:${chrP}`);