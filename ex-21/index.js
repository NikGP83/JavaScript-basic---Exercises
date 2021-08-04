// Write a JavaScript program to create a new string adding "Py" in front of a given string. 
// If the given string begins with "Py" then return the original string. 

const checkStr = (str) => str.indexOf(`Py`) === 0 ? str : `Py` + str;

console.log(checkStr(`notepad`));