// Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.

const checkDouble = (arr) => {
    let numOne = 0;
    let numTwo = 0;
    arr.forEach((num) => num === 30 ? ++numOne : num === 40 ? ++numTwo: null);
    return numOne === 2 || numTwo === 2;
}

console.log(checkDouble([20, 3, 30, 30, 40]));