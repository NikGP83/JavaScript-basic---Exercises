const currentDate = document.querySelector('.date');

const dayOfWeekArr = [`Sunday`,`Monday`,`Tuesday`,`Wednesday `,`Thursday`,`Friday`,`Saturday`];

const newD = new Date().toString().split(' ');
const getTrueDay  = new Date().getDay();

const container = `<p><p><br>`;


const dayOfWeek = dayOfWeekArr[getTrueDay - 1];
console.log(newD, dayOfWeek);

const showTime = () => {
    const utcHour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const partOfDay = `${utcHour > 12 ?  `PM` : `AM`}`;
    const container = `<p>Today is: ${dayOfWeek}<p>`;


let timer = `Current time is: ${utcHour} ${partOfDay} : ${minutes} : ${seconds}`; 
currentDate.textContent = timer;
currentDate.insertAdjacentHTML(`afterbegin`, container);
setTimeout(showTime, 1000);
}

showTime();
