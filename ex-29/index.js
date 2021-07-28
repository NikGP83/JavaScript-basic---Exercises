let rangeMin = 50;
let rangeMax = 99;

const checkArrNums = (...arg) => arg.map((el) => (el >= rangeMin && el <= rangeMax));

console.log(checkArrNums(70, 20, 1000, 90));