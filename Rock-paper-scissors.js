
//global scope variable declaration//

const possibleOptions = ["rock", "paper", "scissors"];
const options = document.querySelectorAll(".option");
let pScore = 0;
let cScore = 0;
let pScoreText = document.querySelector('.playerScoreBox');
let cScoreText = document.querySelector('.computerScoreBox');
const scoreToWin = 5;
let hands = document.querySelector('.hands');
let winnerText = document.querySelector('.winnerText');
const resetButton = document.querySelector('.resetButton');

function computerPlay() {
  return possibleOptions[Math.floor(Math.random()*possibleOptions.length)];
}
//above function explained:
//the function computerPlay selects a random item from the array possibleOptions.
//more specifically like this: Math.random() function returns a number between 0 and 1. 
//this number is multiplied by the array.length. ( = 3 items ).
//this number is rounded down to the nearest integer (whole number) (or stays the same if it's a whole number = integer).
//this results in a result of 0, 1 or 2, which represents the index of the array items.

options.forEach(option => option.addEventListener('click', getPlayerChoice));
//for each option of the container .options (html .buttonContainer), event listener added which triggers getPlayerChoice function.

function getPlayerChoice(e) {
    let playerSelection = (e.target.id);
    playRound(playerSelection, computerPlay());
}
//function getPlayerChoice uses parameter e (event) and declares a variable to the id of this event. e.target targets the id.
//then playRound function is triggered with this id and the computerPlay function output.

function playRound(playerSelection, computerSelection) { 
    if (playerSelection === "rock" && computerSelection === "paper") {
        ++cScore;
        hands.textContent = `Player chose ${playerSelection}. Computer chose ${computerSelection}.`;
        winnerText.textContent = `Computer wins!`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++pScore;
        hands.textContent = `Player chose ${playerSelection}. Computer chose ${computerSelection}.`;
        winnerText.textContent = 'Player wins!';
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        hands.textContent = `Computer also chose ${computerSelection}!`;
        winnerText.textContent = "It's a tie!";

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++cScore;
        hands.textContent = `Player chose ${playerSelection}. Computer chose ${computerSelection}.`;
        winnerText.textContent = 'Computer wins!';
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++pScore;
        hands.textContent = `Player chose ${playerSelection}. Computer chose ${computerSelection}.`;
        winnerText.textContent = 'Player wins!';
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        hands.textContent = `Computer also chose ${computerSelection}!`;
        winnerText.textContent = "It's a tie!";

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++cScore;
        hands.textContent = `Player chose ${playerSelection}. Computer chose ${computerSelection}.`;
        winnerText.textContent = 'Computer wins!';
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++pScore;
        hands.textContent = `Player chose ${playerSelection}. Computer chose ${computerSelection}.`;
        winnerText.textContent = 'Player wins!';
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        hands.textContent = `Computer also chose ${computerSelection}!`;
        winnerText.textContent = "It's a tie!";
    }
     updateScore();
} 
//above function playRound compares both selections, increments score of player or computer & updates the textContent of the game accordingly.
//then updateScore function is triggered

function updateScore() {
    pScoreText.textContent = (`Player score: ${pScore}`);
    cScoreText.textContent = (`Computer score: ${cScore}`);
    if (pScore === scoreToWin  || cScore === scoreToWin) {
        declareWinner();
        options.forEach(option => option.removeEventListener('click', getPlayerChoice));
    }
}
//above function updates the score textContent, and if player or computer reaches score 5, it triggers the declareWinner function and it removes the event listeners on the buttons.

function declareWinner() {
    if (pScore === scoreToWin) {
        hands.textContent = 'You win! Player wins the game!';
        winnerText.textContent = 'If you wish to play again, press reset.';
        hands.setAttribute('style', 'color: #E4C5AF; font-size: 40px');
        winnerText.setAttribute('style', 'font-size: 30px');

    } else if (cScore === scoreToWin) {
        hands.textContent = 'You lose! Computer wins the game!';
        winnerText.textContent = 'If you wish to play again, press reset.';
        hands.setAttribute('style', 'color: #E4C5AF; font-size: 40px');
        winnerText.setAttribute('style', 'font-size: 30px');
    }
}
//above function declares winner and changes the textContent to display the winner message. And sets styling via the setAttribute method.

resetButton.addEventListener('click', resetGame);

function resetGame() {
    pScore = 0;
    cScore = 0;
    pScoreText.textContent = (`Player Score: ${pScore}`);
    cScoreText.textContent = (`Computer Score: ${cScore}`);
    hands.textContent = "";
    hands.removeAttribute("style");
    winnerText.removeAttribute("style");
    winnerText.textContent = "";
    options.forEach(option => option.addEventListener('click', getPlayerChoice));  
}
//above function sets the scores to 0, updates the textContent of the scores and winner. Also removes the styling that was added via setAttribute method earlier. (so styling is same as initial value).
//it also adds an event listener again on the buttons, which was removed earlier in the updateScore function.
