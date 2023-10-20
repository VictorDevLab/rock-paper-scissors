//function called getComputerChoice that will 
//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 

function getComputerChoice() {
    
let randomNumber = Math.floor(Math.random() * 3)
if(randomNumber === 0) {
    return "rock"
} else if (randomNumber === 1) {
    return "paper"
} else {
    return "scissors"
}
}



//a function that plays a single round of rock-paper-scissors
//should take two parameters(playerSelection & computerSelection)
//and returns a winner

function playRound(playerSelection, computerSelection) {

}

const playerSelection = "rock"
const computerSelection = getComputerChoice();

//use a prompt to get input from the user