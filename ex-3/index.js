
const dayContainer = document.querySelector(`.date`);

const date = new Date();

const day = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();

const getDateFormat = (myDate) => myDate < 10 ? `0` + myDate : false;

const innerDate = `${getDateFormat(month)}-${getDateFormat(day)}-${year}`;

dayContainer.textContent = `${getDateFormat(day)}/${getDateFormat(month)}/${year}`;
dayContainer.insertAdjacentHTML(`afterend`, innerDate);


