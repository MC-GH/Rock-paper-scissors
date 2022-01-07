
const possibleOptions = ["rock", "paper", "scissors"];

function computerPlay() {
  return possibleOptions[Math.floor(Math.random()*possibleOptions.length)];
}

let playerScore = 0;
let computerScore = 0;

function game() {
    while(playerScore < 5 && computerScore < 5) {
        if (playRound() === "computer") {
            ++computerScore;
            console.log(`Pc wins! Current score: Computer: ${computerScore} Player: ${playerScore}`);
        } else if (playRound() === "player") {
            ++playerScore;
            console.log(`Player wins! Current score: Computer: ${computerScore} Player: ${playerScore}`);
        } else {
            console.log(`It's a tie! Current score: Computer: ${computerScore} Player: ${playerScore}`);
        }
    }
    if (playerScore === 5) {
        console.log("Congratulations, player wins the game!");
    }
    if (computerScore === 5) {
        console.log("What a shame, computer wins the game!");
    }
}

function playRound() {

    let playerSelectionInput = prompt("Please enter rock, paper or scissors");
    let playerSelection = playerSelectionInput.toLowerCase();
    let computerSelection = computerPlay();

    if (playerSelection === "rock" && computerSelection === "paper") {
        return "computer";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "player";
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return "tie";
    
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "computer";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "player";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "tie";
    
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "computer";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "player";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "tie";
        
    } else { 
        console.log("I don't know this gesture.");
    }
}

