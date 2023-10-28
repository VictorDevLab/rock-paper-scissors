//DOM
const buttons = document.querySelectorAll("input");
const player = document.querySelector(".player")
const computer = document.querySelector(".computer")
const results = document.querySelector(".results")
const playEl = document.querySelector(".playAgain")
let computerScore = 0;
let playerScore = 0
let result = ""
//a function to get a computer choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

computer.textContent = computerScore;
player.textContent = playerScore;

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
    
  if (playerSelection === computerSelection) {
    results.textContent =  "Its a tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    computer.textContent = computerScore;
    results.textContent =  "You lose! Paper covers rocks";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    player.textContent = playerScore;
    results.textContent =  "You won! Paper covers rocks";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    player.textContent = playerScore;
    results.textContent =  "You won! Scissors cuts paper";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    player.textContent = playerScore;
    results.textContent =  "You won! Rock crushes scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    computer.textContent = computerScore;
    results.textContent =  "You lose! Rock crushes scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    computer.textContent = computerScore;
    results.textContent =  "You lose! scissors cuts paper";
  }
}

buttons.forEach(button => {
  button.addEventListener('click', function() {
    playRound(button.value)
  })
})

playEl.addEventListener('click', function() {
 //buttons.disabled = true;
 console.log("clicked")
 computerScore = 0;
 computer.textContent = computerScore;
 playerScore = 0;
 player.textContent = playerScore;
 results.textContent = " "
})


  

//const playerSelection = prompt("play rock-paper-scissors").toLowerCase();
//const computerSelection = getComputerChoice();

// function game() {
//   console.log(playRound(playerSelection, computerSelection));
// }
/*
function game() {

  let playerScore = 0;
  let computerScore = 0;
  
    const playerSelection = button.value
    const computerSelection = getComputerChoice();
    // Call playRound function, passing in newly returned values
    // from the playerPlay and computerPlay functions
    const currentRound = playRound(playerSelection, computerSelection);
    // Log our result
    console.log(currentRound);
    if (currentRound.includes("won!")) {
      playerScore ++;
    } else if (currentRound.includes("lose!")) {
      computerScore ++;
    }

    if (playerScore === 5 ) {
      console.log("you won the overall")
     } else if (computerScore === playerScore) {
       console.log("you lost everyiod")
     }
  
  }
  
  


game ()

*/