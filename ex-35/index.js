// Write a program to check whether a specified character exists within the 2nd to 4th position in a given string. 


const FIRST = 2;
const LAST = 4;

const range = {low:FIRST-1, hi:LAST}; 

const inRange = (value, range)=> range.low<=value && value <= range.hi;

const checkChrtr = (c, str)=>inRange(str.indexOf(c), range);

console.log(checkChrtr("y", "Python"));

