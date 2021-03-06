
const possibleOptions = ["rock", "paper", "scissors"];

function computerPlay() {
  return possibleOptions[Math.floor(Math.random()*possibleOptions.length)];
}

function userPlay() {
    let input = prompt("Please enter rock, paper or scissors. Or press cancel to cancel the game.");
    if (input === null) {
        return input;       //when a prompt is cancelled, this is seen as null. Therefore if player cancels, the input is null, and we return the input (null)
    } else {
        return input.toString().toLowerCase();
    }
}

function playRound() {

    let playerSelection = userPlay();
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
    
    } else if (playerSelection === null) {
        return playerSelection;     //If player CANCELS the prompt in userPlay, this is seen as null. If the result of userPlay function is null, we cancel the round. But ONLY if the input is null. Player should still be able to enter an empty string or other values
    } else { 
        console.log("I don't know this gesture. Please try again or cancel.");
    }
}

let playerScore = 0;
let computerScore = 0;

function game() {
    while(playerScore < 5 && computerScore < 5) {
        let roundWinner = playRound();
        if (roundWinner === "computer") {
            ++computerScore;
            console.log(`Pc wins! Current score: Computer: ${computerScore} Player: ${playerScore}`);
        } 
        if (roundWinner === "player") {
            ++playerScore;
            console.log(`Player wins! Current score: Computer: ${computerScore} Player: ${playerScore}`);
        }
        if (roundWinner === "tie") {
            console.log(`It's a tie! Current score: Computer: ${computerScore} Player: ${playerScore}`);
        }
        if (roundWinner === null) {
            console.log('Game cancelled');
            break;
        }
    }   
        if (playerScore === 5) {
            console.log("Congratulations, player wins the game!");
        }
        if (computerScore === 5) {
            console.log("What a shame, computer wins the game!");
        }       
}