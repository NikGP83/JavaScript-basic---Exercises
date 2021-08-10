// Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. 
// The length of the given string must be 3 and above.

let sentence = `javascript`;
let numOfCopyes = 4;

const copyAndConcatLastThreeSymbls = (str, n_copies) => {
    if (n_copies > 0 && str.length >= 3) {
        let sample = str.slice(-3);
        let result = ``;
        for (let i = 0; i < numOfCopyes; i++) {
            result += sample;
        }
        return result;
    }
}


console.log(copyAndConcatLastThreeSymbls(sentence, numOfCopyes));