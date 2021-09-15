// Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

const swapElements = (arr) => {
    const firstEl = arr.shift();
    const secondEl = arr.pop();
    return [secondEl, ...arr, firstEl];
};

console.log(swapElements([3, 4, 5, 6, 8]));