// Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

const checkSumm = (x, y) => x + y >= 50 && x + y <= 80 ? 65 : 80;

console.log(checkSumm(30, 30));