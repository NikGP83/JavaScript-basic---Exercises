const checkNumOne= (num) => (Math.abs(100 - num) <= 20) || (Math.abs(400 - num) <= 20);

const checkNumTwo = (num) => ((100 - num) * 1) <= 20 || ((400 - num) * 1) <= 20;

console.log(checkNumOne(90));
console.log(checkNumTwo(150));

//два решения