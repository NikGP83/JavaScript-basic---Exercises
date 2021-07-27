const changeStrPosition = (str) => {
    if (str.length > 1) {
    let strArr = str.split('');
    let firstChr = strArr.shift();
    let lastChr = strArr.pop();
    let word = str.substr(1, str.length - 2);
    console.log(lastChr + word + firstChr);
    }
};

changeStrPosition(`Курица`);