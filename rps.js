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
        console.log("You win! Rock beats scissors");
        incrementPlayer();
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log("You win! Paper beats rock");
        incrementPlayer();
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log("You win! Scissors beats paper");
        incrementPlayer();
    }
    else if (playerSelection == computerSelection) {
        console.log("It's a tie!");
    }
    else {
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
        incrementComputer();
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




// console.log(playRound(playerSelection, computerSelection));