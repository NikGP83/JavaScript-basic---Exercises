// Write a JavaScript program to check whether the last digit of the three given positive integers is same.

const checkNum = (...args) => {
    let newArr = args.map((num) => +(num.toString().split('').pop()));
    let result = Array.from(new Set([...newArr]));    
    if (result.length === 1) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkNum(401, 71, 901, 501));