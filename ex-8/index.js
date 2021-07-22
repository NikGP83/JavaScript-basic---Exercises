const userForm = document.querySelector('.user-form');
const userBtn = document.querySelector(`.btn`);

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getAnswer = (evt) => {
   evt.preventDefault();
   
}

userForm.addEventListener(`submit`, getAnswer);


