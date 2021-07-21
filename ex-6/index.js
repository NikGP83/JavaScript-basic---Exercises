const isLeapYear = (year) => {
    return year % 400 === 0 ? year % 4 === 0 : false;
}

console.log(isLeapYear(2000));