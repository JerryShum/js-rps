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

function getPlayerChoice() {
    let input;

    do {

        input = prompt("Please enter your choice, Rock, Paper, or Scissors").toLowerCase();
    } while (input != "rock" || input != "paper" || input != "scissors")

    return input;

}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You win! Rock beats scissors";
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You win! Paper beats rock";
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You win! Scissors beats paper";
    }
    else if (playerSelection == computerSelection) {
        return "It's a tie!";
    }
    else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

console.log(playRound(playerSelection, computerSelection));