// Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.  Go to the editor
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

const checkModes = (a, b, c) => b > a && b > c ? `Strict mode` : `Soft mode`;

console.log(checkModes(10, 16, 40));