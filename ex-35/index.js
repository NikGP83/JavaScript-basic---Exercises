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

