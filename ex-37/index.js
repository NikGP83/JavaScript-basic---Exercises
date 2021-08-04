// Write a JavaScript program to create a new string with first 3 characters are in lower case from a given string. 
// If the string length is less than 3 convert all the characters in upper case.

const getNewCase = (str) => {
    let newString = ``;
    if (str.length <= 3) {
        newString = str.toUpperCase()
    }
    else {
        newString = ([...str.slice(0, 3).toLowerCase(), ...str.slice(4)]).join()
        
    }
    console.log(newString)
};

console.log(getNewCase(`ABBYLIN`));