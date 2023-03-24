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

/* Adding event listeners to buttons */
document.getElementById("rock-box").addEventListener("click", function() {
    playMatch("rock");
});

document.getElementById("paper-box").addEventListener("click", function() {
    playMatch("paper");
});

document.getElementById("scissors-box").addEventListener("click", function() {
    playMatch("scissors");
});



/* Play a single round */

function playRound(playerSelection, computerSelection) {
    const playerCompare = playerSelection.toLowerCase();
    const computerCompare = computerSelection.toLowerCase();

    if (playerCompare === computerCompare) {
        document.getElementById('last-round-update').innerText = "This round was a tie.";
    }
    else if (playerCompare == "rock" && computerCompare == "scissors") {
        playerScore++;
        document.getElementById('player-score').innerText = playerScore;
        document.getElementById('last-round-update').innerText = "You win! Rock beats scissors!";
    }
    else if (playerCompare == "rock" && computerCompare == "paper") {
        computerScore++;
        document.getElementById('computer-score').innerText = computerScore;
        document.getElementById('last-round-update').innerText = "You lose! Paper beats rock!";
    }
    else if (playerCompare == "paper" && computerCompare == "rock") {
        playerScore++;
        document.getElementById('player-score').innerText = playerScore;
        document.getElementById('last-round-update').innerText = "You win! Paper beats rock!";
    }
    else if (playerCompare == "paper" && computerCompare == "scissors") {
        computerScore++;
        document.getElementById('computer-score').innerText = computerScore;
        document.getElementById('last-round-update').innerText = "You lose! Scissors beats paper!";
    }
    else if (playerCompare == "scissors" && computerCompare == "paper") {
        playerScore++;
        document.getElementById('player-score').innerText = playerScore;
        document.getElementById('last-round-update').innerText = "You win! Scissors beats paper!";
    }
    else if (playerCompare == "scissors" && computerCompare == "rock") {
        computerScore++;
        document.getElementById('computer-score').innerText = computerScore;
        document.getElementById('last-round-update').innerText = "You lose! Rock beats scissors!";
    }
}

/* Creating a 5-round game of Rock Paper Scissors */

var roundsPlayed = 0
var playerScore = 0;
var computerScore = 0;

function playMatch(clickedButton) {
    if (roundsPlayed > 4) return;

    playRound(clickedButton, getComputerChoice());
    roundsPlayed++;

    if (roundsPlayed > 4) {
        if (playerScore == computerScore) {
            document.getElementById('last-round-update').innerText = "Game over. You drew the game!";
        } else if (playerScore > computerScore) {
            document.getElementById('last-round-update').innerText = "Game over. You won the game!";
        }
        else if (computerScore > playerScore) {
            document.getElementById('last-round-update').innerText = "Game over. You lost the game :(";
        }
        document.getElementById('current-round').innerText = "Play again?";
        document.getElementById('current-round').setAttribute("id", "play-again");
        
        document.getElementById('play-again').addEventListener("click", function() {
            playAgain();
        })
    }
    else {
        document.getElementById('current-round').innerText = "Round " + (roundsPlayed + 1);
    }

}

/* Reset the game with the play again button */

function playAgain() {
    roundsPlayed = 0;
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;
    document.getElementById('last-round-update').innerText = "Choose an option below to begin the game.";
    document.getElementById('play-again').setAttribute("id", "current-round");
    document.getElementById('current-round').innerText = "Round 1";
}