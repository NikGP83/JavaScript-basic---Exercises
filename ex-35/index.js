// Write a program to check whether a specified character exists within the 2nd to 4th position in a given string. 

let chr = `n`;

const checkChrtr = (str) =>  {
         let result = str.indexOf(chr, 2)
         if (result >= 2 || result <= 4) {
             return result;
         }
         else {
             false;
         }
     }; 

console.log(checkChrtr(`isnos`));

