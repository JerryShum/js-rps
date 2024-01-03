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
console.log(buttons);


buttons.forEach(buttons => {
    console.log(buttons.value);
    buttons.addEventListener('click', playRound);
});

//! Logic:

function playRound() {
    let playerSelection = this.value.toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playerSelection);

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log("You win! Rock beats scissors");
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log("You win! Paper beats rock");
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log("You win! Scissors beats paper");
    }
    else if (playerSelection == computerSelection) {
        console.log("It's a tie!");
    }
    else {
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
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




// console.log(playRound(playerSelection, computerSelection));