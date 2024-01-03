/* Pseudocode:

- getComputerChoice(){
    - rand = randomnum between 1-3
    if random num == 1 , 2 , 3 
    return rock , paper, scissors

}

- getPlayerChoice(){
    get user input, rock, paper, scissors
    return userinput
}

- Game(playerChoice, computerChoice){

}

*/

//! Selecting elements
const buttons = document.querySelectorAll('button')
const roundCounterElement = document.querySelector('.round-counter')
const playerScoreElement = document.querySelector('.player-score')
const computerScoreElement = document.querySelector('.computer-score')
const resultsElement = document.querySelector('.results')




buttons.forEach(buttons => {
    console.log(buttons.value);
    buttons.addEventListener('click', playRound);
});

//! Logic:

let roundCount = 0;
let playerScore = 0;
let computerScore = 0;



function playRound() {
    let playerSelection = this.value.toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playerSelection);

    roundCount++;
    roundCounterElement.textContent = 'Current Round: ' + roundCount

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        resultsElement.textContent = "You win! Rock beats Scissors";
        incrementPlayer();
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {

        resultsElement.textContent = "You win! Paper beats Rock";
        incrementPlayer();
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {

        resultsElement.textContent = "You win! Scissors beats Paper";
        incrementPlayer();
    }
    else if (playerSelection == computerSelection) {

        resultsElement.textContent = "It's a tie!"
    }
    else {

        resultsElement.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
        incrementComputer();
    }

    if (playerScore == 5) {
        resultsElement.textContent = "You won!"
        reset();

    } else if (computerScore == 5) {
        resultsElement.textContent = "You Lose!"
        reset();
    }
}


function getComputerChoice() {
    // Gets a random number between 0 - 2
    let num = Math.floor(Math.random() * 3);

    switch (num) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }

}

function incrementPlayer() {
    playerScore++;
    playerScoreElement.textContent = 'Player Score: ' + playerScore;
}

function incrementComputer() {
    computerScore++;
    computerScoreElement.textContent = 'Computer Score: ' + computerScore;
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    // resultsElement.textContent = 'The game has not started yet! Please press a button to start the game!'
}



// console.log(playRound(playerSelection, computerSelection));