// Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. 
// Display the new array. 

const setLargerNum = (arr) => {       
        const result = arr.map((el, i) => arr[0] > arr[arr.length - 1] ? el[i] = arr[0] : el[i] = arr[arr.length - 1]);
        return result; 
};

console.log(setLargerNum([8, 3, 4]));
console.log(setLargerNum([8, 3, 4, 4, 9]));