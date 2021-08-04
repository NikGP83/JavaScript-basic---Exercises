// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. 
// The string length must be 3 or more.

const createNewString = (str) => {
    if (str.length >= 3) {
        let lastThreeChr = str.substr(-3);
        return lastThreeChr + str + lastThreeChr;
    }
};

console.log(createNewString(`уникум`))