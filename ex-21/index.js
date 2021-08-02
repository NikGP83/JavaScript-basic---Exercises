const checkStr = (str) => str.indexOf(`Py`) === 0 ? str : `Py` + str;

console.log(checkStr(`notepad`));