const currentDate = document.querySelector('.date');

const dayOfWeekArr = [`Sunday`,`Monday`,`Tuesday`,`Wednesday `,`Thursday`,`Friday`,`Saturday`];

const newD = new Date().toString().split(' ');
const getTrueDay  = new Date().getDay();
const dayOfWeek = dayOfWeekArr[getTrueDay - 1];

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
