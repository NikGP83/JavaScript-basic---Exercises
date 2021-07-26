const isPositiveNum = (num) => (num % 2 === 0);

const checkPositiveOrNegativeNum = (one, two) => {
    let checkOne = isPositiveNum(one);
    let checkTwo = isPositiveNum(two);
    console.log(checkOne, checkTwo);
}

checkPositiveOrNegativeNum(3, 4);