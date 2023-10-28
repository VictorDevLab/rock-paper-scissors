//DOM
const buttons = document.querySelectorAll("input");
let player = document.querySelector(".player")
let computer = document.querySelector(".computer")
let computerScore = 0;
let playerScore = 0

//function called getComputerChoice that will
//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

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


function playRound(playerSelection) {
  let computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    return "Its a tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    computer.textContent = "Computer Score " + computerScore;
    return "You lose! Paper covers rocks";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    player.textContent = "Player Score " + playerScore;
    return "You won! Paper covers rocks";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    player.textContent = "Player Score " + playerScore;
    return "You won! Scissors cuts paper";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    player.textContent = "Player Score " + playerScore;
    return "You won! Rock crushes scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    computer.textContent = "Computer Score " + computerScore;
    return "You lose! Rock crushes scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    computer.textContent = "Computer Score " + computerScore;
    return "You lose! scissors cuts paper";
  }
}

buttons.forEach(button => {
  button.addEventListener('click', function() {
    console.log(playRound(button.value))
  })
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