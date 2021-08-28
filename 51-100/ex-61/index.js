// Write a JavaScript program to concatenate two strings except their first character

const concStrgs = (first, second) => first.slice(1) + second.slice(1)

console.log(concStrgs(`робот`, `бабушка`));