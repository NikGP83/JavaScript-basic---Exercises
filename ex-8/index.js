const userForm = document.querySelector(`.user-form`);
const userBtn = document.querySelector(`.user-form-btn`);
const userInput = document.querySelector(`.user-input`);


const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let guesNumber = getRandom(1, 10);

const usersTry = () => {     
   if(guesNumber === (+userInput.value)) {
      alert(`Good Work`)      
   }
   else {
      alert(`Not matched`);
      return guesNumber = getRandom(1, 10);            
   }  
};

userBtn.addEventListener(`click`, usersTry);

const getAnswer = (evt) => {
   evt.preventDefault();   
};

userForm.addEventListener(`submit`, getAnswer);


