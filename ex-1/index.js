const currentDate = document.querySelector('.date');

const dayOfWeekArr = [`Sunday`,`Monday`,`Tuesday`,`Wednesday `,`Thursday`,`Friday`,`Saturday`];

const newD = new Date().toString().split(' ');
const getTrueDay  = new Date().getDay();
const dayOfWeek = dayOfWeekArr[getTrueDay - 1];
// Write a JavaScript program to display the current day and time in the following format. 
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38



const showTime = () => {
    const utcHour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const partOfDay = `${utcHour > 12 ?  `PM` : `AM`}`;

let timer = `Current time is: ${utcHour} ${partOfDay} : ${minutes} : ${seconds} `; 
currentDate.textContent = timer;


const container = document.createTextNode(`   Today is: ${dayOfWeek}`);
currentDate.appendChild(container);

setTimeout(showTime, 1000);
}

showTime();
