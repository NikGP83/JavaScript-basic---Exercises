const printButton = document.querySelector(`.btn`);

const printWindow = () => {
    window.print();
}

printButton.addEventListener(`click`, printWindow);