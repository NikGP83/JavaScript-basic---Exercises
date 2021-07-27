const newFirstStr = (str) => {
    let firstChr = str.substr(0, 1);
    let result = firstChr + str + firstChr;
    console.log(result)
};

newFirstStr(`Индекс`);