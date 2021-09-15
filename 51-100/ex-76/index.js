// Write a JavaScript program to create a new array taking the first and last elements from a given array 
// of integers and length must be greater or equal to 1.

const getNewArr = (arr) => {
    const newArr = []
    newArr.push(arr[0], arr[arr.length - 1]);
    return newArr;
}

console.log(getNewArr([20, 12, 16]))
