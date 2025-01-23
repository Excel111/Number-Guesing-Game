// select the necessary DOM elements
const input = document.querySelector("input"); // input field where user enter their guess
const guessE1 = document.querySelector(".guess"); // Element to display feedback for the user's guess
const checkBtnE1 = document.querySelector("button"); //Button to check the guess
const remainingChancesTextE1 = document.querySelector(".chances"); // Text  displaying remaaining chances
const remainingChancesE1 = document.querySelector(".chance"); //Element to display the number of remaining chances

//Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialize the total numbeer of chances
let totalChances = 100;

//Add an event listener to the "Check" button
checkBtnE1.addEventListener("click", () => {
  //decrease the remaining chab=nces by 1
  totalChances--;
  // get the value entered by the user and conver it to a number
  let inputValue = parseInt(inputE1.value);

  //check if the user has run out of chances
  if (totalChances === 0) {
    inputValue = ""; // clear the input field
    inputE1.disabled = true; // Clear the input field
    guessE1.textContent = "Oops...! Bad guess😪, You lost the game."; // Display a lossing message
    guessE1.style.color = "red"; //Change the text color to red
    checkBtnE1.textContent = "Play Again...😉"; //Update the button text to "Play Again"
    remainingChancesTextE1.textContent = "No chances left"; // update the chances text

  }
  //check if the guess is too high
  else if (inputValue > randomNumber && inputValue <= 100) {
    guessE1.textContent = "Too high! Try again"; // Display a feedback message
    remainingChancesE1.textContent = totalChances; //update the remaining chances
    guessE1.style.color = "#1446a0"; //set the text color
  }

  //check if the guess is too low
  else if (inputValue < randomNumber && inputValue > 0) {
    guessE1.textContent = "Too low! Try again"; // Display a feedback message
    remainingChancesE1.textContent = totalChances; //update the remaining chances
    guessE1.style.color = "#1446a0"; //set the text color
  }

  //check if the input is invalid
  else {
    guessE1.textContent = "Invalid input! Please enter a number between 1 and 100."; //Display an error message
    remainingChancesE1.textContent = totalChances; // Update the remaining chances
    guessE1.style.color = "red"; //set the text color red
  }
});
