
//Create a function which will randomly generate rock paper scissors and store it in a variable computerChoice//

const possibleOptions = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return possibleOptions[Math.floor(Math.random()*possibleOptions.length)];
}

function playRound() {
    let playerSelection = prompt("Please enter Rock, Paper or Scissors");
    let computerSelection = computerPlay();

    if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log(`Computer chose ${computerSelection}. ${computerSelection} beats ${playerSelection}. Computer wins`);
        // to delete console.log(computerScore + 1);//
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log(`Computer chose ${computerSelection}. ${computerSelection} loses to ${playerSelection}. Player wins`);
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        console.log(`Computer also chose ${computerSelection}. It's a tie!`);

    }
}

//scores are not saved outside of the function//
let playerScore = 0;
let computerScore = 0;

//Ask input from user and store it in a variable userChoice (rock paper or scissors)//

//Write a function that compares user input choice with random choice of computer and that keeps score in a points counter//
    //If user chooses rock and computer chooses scissors
        // => Display message 'user wins', add a point to the counter of user//
    //else if user chooses rock and computer chooses paper
        // => Display message 'computer wins', add a point to the counter of computer//
    //else if user chooses rock and computers chooses Rock
        // => Display message 'It's a tie! Try again', add a point to the counter of computer + user//

    //else if user chooses paper and computer chooses rock
        // => Display message 'user wins', add a point to the counter of user//
    //else if user chooses paper and computer chooses scissors
        // => Display message 'computer wins', add a point to the counter of computer//
    //else if user chooses paper and computers chooses paper
        // => Display message 'It's a tie! Try again', add a point to the counter of computer + user//

         //else if user chooses scissors and computer chooses paper
        // => Display message 'user wins', add a point to the counter of user//
    //else if user chooses scissors and computer chooses rock
        // => Display message 'computer wins', add a point to the counter of computer//
    //else if user chooses scissors and computers chooses scissors
        // => Display message 'It's a tie! Try again', add a point to the counter of computer + user//


//create a points counter for user + a points counter for computer//
    //if points counter of user reaches 5 and points counter of computer is less than 5, display a message, user wins//
    //if points counter of computer reaches 5 and the points counter of user is less than 5, display a message, computer wins//
    //if points counter of user AND computer are 5, display a message, it's a tie, would you like to try again?//

//create a reset option?//