// Write a JavaScript program to compute the absolute difference between a specified number and 19. 
// Returns triple their absolute difference if the specified number is greater than 19

const getGreaterDiff = (num) => num > 19 ? (num - 19) * 3 : 19 - num;

console.log(getGreaterDiff(40));