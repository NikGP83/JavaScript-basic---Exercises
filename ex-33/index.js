const checkRangeNum = (x, y) => {
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
        (x >= 70 && x <= 100 && y >= 70 && y <= 100)) {
        return true;
    } else {
       return false;
    };
};

console.log(checkRangeNum(45, 55));
console.log(checkRangeNum(75, 1000));