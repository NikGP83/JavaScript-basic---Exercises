// Write a JavaScript program to create a string using the middle three characters of a given string of odd length. 
// The string length must be greater or equal to three.

const sentence = `indmsls`;

const getThreeMiddleSymbs = (str) => {
    if (str.length >= 3){
    const middleIndx = Math.floor(str.length / 2)    
    const result = str.slice(middleIndx, middleIndx + 3)
    return result
    };
};

console.log(getThreeMiddleSymbs(sentence));