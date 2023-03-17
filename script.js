/* Generating a random computer choice */

function getComputerChoice() {
    const computerChoice = Math.floor((Math.random() * 3) + 1);
    
    if (computerChoice == 1) {
        return "Rock";
    }
    else if (computerChoice == 2) {
        return "Paper";
    }
    else if (computerChoice == 3) {
        return "Scissors";
    }
}

/* Computing a single round */

function playRound(playerSelection, computerSelection) {
    const playerCompare = playerSelection.toLowerCase();
    const computerCompare = computerSelection.toLowerCase();

    if (playerCompare === computerCompare) {
        return "This round is a tie!"
    }
    else if (playerCompare == "rock" && computerCompare == "scissors") {
        return "You win! Rock beats scissors!"
    }
    else if (playerCompare == "rock" && computerCompare == "paper") {
        return "You lose! Paper beats rock!"
    }
    else if (playerCompare == "paper" && computerCompare == "rock") {
        return "You win! Paper beats rock!"
    }
    else if (playerCompare == "paper" && computerCompare == "scissors") {
        return "You lose! Scissors beats paper!"
    }
    else if (playerCompare == "scissors" && computerCompare == "paper") {
        return "You win! Scissors beats paper!"
    }
    else if (playerCompare == "scissors" && computerCompare == "rock") {
        return "You lose! Rock beats scissors!"
    }
}

/* Creating a 5-round game of Rock Paper Scissors */

let playerSelection = 'scissors';
let computerSelection = getComputerChoice();

