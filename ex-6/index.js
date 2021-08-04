// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 

const isLeapYear = (year) => {
    return year % 400 === 0 ? year % 4 === 0 : false;
}

console.log(isLeapYear(2000));