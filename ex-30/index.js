// Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, 
// if "Script" presents in the string return the string without "Script" otherwise return the original one.

const TAG = `Script`;

const checkAndRemoveWord = (sentence) => {
    if (sentence.indexOf(TAG) === 4) {
        return sentence.replace(TAG, ``)
    }
    else {
        return sentence;
    }
    
};

console.log(checkAndRemoveWord(`JavaScript`));