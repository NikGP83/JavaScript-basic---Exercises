const cutStr = (str, cutNum) => {
    let findNum = str.indexOf(cutNum);
    let result = str.slice(0, findNum) + str.slice(findNum + 1);
    console.log(result);
};

cutStr(`index`, `n`);