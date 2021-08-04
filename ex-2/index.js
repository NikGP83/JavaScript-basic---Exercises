// Write a JavaScript program to print the contents of the current window.

const printButton = document.querySelector(`.btn`);

const printWindow = () => {
    window.print();
}

printButton.addEventListener(`click`, printWindow);