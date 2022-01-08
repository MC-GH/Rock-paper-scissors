
const possibleOptions = ["rock", "paper", "scissors"];

function computerPlay() {
  return possibleOptions[Math.floor(Math.random()*possibleOptions.length)];
}

function userPlay() {
    let input = prompt("Please enter rock, paper or scissors");
    if (input === null) {
        return "cancel";
    }
    else {
        return input.toString().toLowerCase();
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
        if (roundWinner === "cancel") {
            break ;
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

    } else if (playerSelection === "cancel") {
        return "cancel";
    } else { 
        console.log("I don't know this gesture.");
    }
}


//one issue left = if cancel is pressed it should cancel the loop and display cancelled message.//
//works for now, but does not seem optimal? Have to mention it several times//