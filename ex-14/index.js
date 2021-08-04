// Write a JavaScript exercise to get the extension of a filename. 

const extension = `index.js`

const getExtension = (file) => file.split('.').pop();
let result = getExtension(extension);
console.log(result);