

const findNearestNum = (x, y) => {

    let arrOfresults = [];

    if (x !== y) {
        let first = arrOfresults.push(Math.abs(x - 100));
        let second = arrOfresults.push(Math.abs(y - 100));
        console.log(Math.min.apply(null, arrOfresults));
    }
    else {
        console.log(`Нельзя одинаковые аргументы`)
    }
}

findNearestNum(90, 170);