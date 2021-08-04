// Write a JavaScript program to remove a character at the specified position of a given string and return the new string. 

const cutStr = (str, cutNum) => {
    let findNum = str.indexOf(cutNum);
    let result = str.slice(0, findNum) + str.slice(findNum + 1);
    console.log(result);
};

cutStr(`index`, `n`);