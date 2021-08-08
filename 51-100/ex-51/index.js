// Write a JavaScript program to convert a given number to hours and minutes. 

const getNumToTime = (num) => {
    let hour = Math.floor(num / 60);
    let minutes = num % 60 ;
    return `${hour} : ${minutes}`
}

console.log(getNumToTime(324));