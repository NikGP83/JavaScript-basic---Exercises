// Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.

const checkWord = (word) => {
   let result = word.substr(0, 4) === `Java`;
   console.log(result);    
};   

checkWord(`JavaScript`);