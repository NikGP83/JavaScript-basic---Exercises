// Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3

const getMiddleElementsToNewArr = (arrOne, arrTwo) => [...arrOne.slice(1, 2), ...arrTwo.slice(1, 2)];

console.log(getMiddleElementsToNewArr([1, 3, 4], [2, 13, 48]));