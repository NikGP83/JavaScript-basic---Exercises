let rangeMin = 50;
let rangeMax = 99;

const checkTwoNums = (a, b) => (a >= rangeMin && a <= rangeMax) || (b >= rangeMin && b <= rangeMax);

console.log(checkTwoNums(70, 20));