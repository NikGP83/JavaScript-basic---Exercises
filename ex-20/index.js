// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative. 

const checkPositiveOrNegativeNum = (oneIntg, twoIntg) => {
    let checkOne = Math.sign(oneIntg);
    let checkTwo = Math.sign(twoIntg);
    if (checkOne === 1 && checkTwo === 1) {
        console.log(false)
    }
    else {
        console.log(true)
    };
}

checkPositiveOrNegativeNum(-2, 4);

