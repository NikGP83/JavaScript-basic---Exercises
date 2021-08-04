// Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.

const newFirstStr = (str) => {
    let firstChr = str.substr(0, 1);
    let result = firstChr + str + firstChr;
    console.log(result)
};

newFirstStr(`Индекс`);