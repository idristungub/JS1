function computerPlay() {
  var random = Math.random();
  if (random <= 0.34) {
    return "rock";
  } else if (random >= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}
// computerPLay random object between 0 and 1 as there is 3 strings such as rock, paper and scissors. The computer plays rock i

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "paper") {
      return "You lose! Paper beats Rock!";
    } else if (computerSelection === "rock") {
      return tie;
    } else {
      return "You win! Rock beats Scissors!";
    }
  }

  if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection === "paper") {
      return "You win! Scissors beats Paper";
    } else if (computerSelection === "scissors") {
      return tie;
    } else {
      return "You lose! Rock beats Scissors";
    }
  }

  if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "scissors") {
      return "You lose! Scissors beats Paper";
    } else if (computerSelection === "paper") {
      return tie;
    } else {
      return "You win! Paper beats Rock";
    }
  }
}

let tie = "its a tie!";

for (var i = 0; i < 5; i++) {
  let playerSelection = prompt("Enter either rock, scissors, paper");
  const computerSelection = computerPlay();
  console.log(`You played ${playerSelection}`);
  console.log(`Computer played ${computerSelection}`);
  console.log(playRound(playerSelection, computerSelection));
}

