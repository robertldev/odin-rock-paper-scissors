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
        playerScore++;
        return "You win! Rock beats scissors!"
    }
    else if (playerCompare == "rock" && computerCompare == "paper") {
        computerScore++;
        return "You lose! Paper beats rock!"
    }
    else if (playerCompare == "paper" && computerCompare == "rock") {
        playerScore++;
        return "You win! Paper beats rock!"
    }
    else if (playerCompare == "paper" && computerCompare == "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper!"
    }
    else if (playerCompare == "scissors" && computerCompare == "paper") {
        playerScore++;
        return "You win! Scissors beats paper!"
    }
    else if (playerCompare == "scissors" && computerCompare == "rock") {
        computerScore++;
        return "You lose! Rock beats scissors!"
    }
}

/* Creating a 5-round game of Rock Paper Scissors */

let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Please enter a choice - rock, paper or scissors");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
 }

 /* Check winner */

function findWinner() {
    if (playerScore == computerScore) {
        return "The game was a tie."
    } else if (playerScore > computerScore) {
        return "You won the game!"
    } else if (computerScore > playerScore) {
        return "You lost the game."
    }
}

console.log("You scored " + playerScore);
console.log("The computer score " + computerScore);
console.log(findWinner());