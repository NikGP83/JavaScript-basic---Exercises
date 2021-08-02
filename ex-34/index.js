const findLargeNum = (x, y) => {
    if (x >= 40 && x <=60 && y >=40 && y <= 60) {
        let result = Math.max(...[x, y]);
        console.log(result);
    }
    else {
        return false;
    }
};

console.log(findLargeNum(60, 44));