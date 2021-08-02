const calculateForm = document.querySelector(`.calc`);
const firstNumber = document.querySelector(`.one-n`);
const secondNumber = document.querySelector(`.two-n`);
const multiplyBtn = document.querySelector(`.multiply-btn`);
const divideBtn = document.querySelector(`.divide-btn`);
const calcResultInpt = document.querySelector(`.calc-result`);

const getCalc = (evt) => {
    evt.preventDefault()    
};

const getMultiply = () => {
    calcResultInpt.value = (+firstNumber.value) * (+secondNumber.value);
};

const getDivide = () => {
    calcResultInpt.value = (+firstNumber.value) / (+secondNumber.value);
};

multiplyBtn.addEventListener(`click`, getMultiply);
divideBtn.addEventListener(`click`, getDivide);

calculateForm.addEventListener(`submit`, getCalc);

