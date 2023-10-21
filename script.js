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
if(playerSelection === computerSelection) {
    return "Its a tie"
} else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper covers rocks"
} else if (playerSelection === "paper" && computerSelection ==="rock") {
    return "You win! Paper covers rocks"
} else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors cuts paper"
} else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock crushes scissors"
} else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock crushes scissors"
} else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! scissors cuts paper"
}
}

const playerSelection = prompt("play rock-paper-scissors").toLowerCase()
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection))

