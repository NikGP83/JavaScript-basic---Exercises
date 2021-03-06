// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. 
// If the user input matches with guess number, 
// the program will display a message "Good Work" otherwise display a message "Not matched".


const userForm = document.querySelector(`.user-form`);
const userBtn = document.querySelector(`.user-form-btn`);
const userInput = document.querySelector(`.user-input`);


const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let guesNumber = getRandom(1, 10);

const usersTry = () => {
   if((+userInput.value) > 10) {
      alert(`Only 1 to 10 numbers`)
      return      
   }     
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


