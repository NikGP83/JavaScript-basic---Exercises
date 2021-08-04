// Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.


// const findLargeNum = (x, y) => {
//     if (x >= 40 && x <=60 && y >=40 && y <= 60) {
//         let result = Math.max(...[x, y]);
//         console.log(result);
//     }
//     else {
//         return false;
//     }
// };

const inRange = (num) => (num >= 40 && num <=60);

const findLargeNum = (x, y)  =>{
    if(! inRange(x)) throw new Error(X_NOT_IN_RANGE);
    if(! inRange(y)) throw new Error(Y_NOT_IN_RANGE);
    return x > y? x: y;
 }

console.log(findLargeNum(60, 44));