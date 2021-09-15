// Write a JavaScript program to add two digits of a given positive integer of length two.  

const addTwoDigits = (num) => num.toString().split(``).reduce((a, el) => +a + (Number(el)));

console.log(addTwoDigits(76));