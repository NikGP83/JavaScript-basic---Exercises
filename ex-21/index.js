const checkStr = (str) => str.indexOf(`Py`) > -1 ? str : `Py` + str;

console.log(checkStr(`notepad`));