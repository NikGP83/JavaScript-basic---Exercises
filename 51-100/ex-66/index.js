// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

const city = document.querySelector(`.city`);

const sentence = `Los Angeles`;
const wrongSentense = `Washington`;

const isShowToDisplay = (str) => str.slice(0, 3) === `Los` || str.slice(0, 3) === `New` ? str: ``;

const cityContent = `The name of city is: ${isShowToDisplay(sentence)}`

city.textContent = cityContent;