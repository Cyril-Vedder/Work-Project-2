var playerScore = 0;
var computerScore = 0;

function welcomeMessage() {
  alert("Welcome to Rock, Paper, Scissors. Best two out of three.");
}

function playGame(numOfRounds) {
  welcomeMessage();
  do {
    var player   = playerGuess();
    var computer = computerGuess();
    var result = compareGuesses(player, computer);
    updateScores(result, 1);
    if(result !== 0) {
      numOfRounds--;
    }
  }while(numOfRounds > 0);

  if(playerScore > computerScore) {
    alert("You have " + playerScore + " points compared to the computer's " + computerScore + " points. So you win!");
  }
  else {
    alert("The computer has " + computerScore + " points compared to your " + playerScore + " points. So the computer wins!");
  }

  clearScores();

}

function playerGuess() {
 var playerChoice = prompt("Choose rock, paper, or scissors.");
   if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
     return playerChoice;
   }
  alert("You typed something else or did not spell your choice correctly please try again.");
  playerGuess();
}

function computerGuess() {
  var choice = Math.random();
  if(choice < 0.34) {
    return "rock";
  }
  if(choice <= 0.67) {
    return "paper";
  }
  return "scissors";
}

function compareGuesses(guess1, guess2) {
  alert("You chose: " + guess1 + " and the computer chose: " + guess2 + "!");

    if(guess1 === guess2) {
    alert("You and the computer guessed the same thing! Go again, no score added.");
    return 0;
  }

    if(
    (guess1 === "rock" && guess2 === "scissors") 
                       ||
    (guess1 === "paper" && guess2 === "rock")
                       ||
    (guess1 === "scissors" && guess2 === "paper"))
    {
   alert("You won this round!");
    return 1;
    }
   alert("The computer won this round!");
   return 2;
}

function updateScores(result, points) {
    if(result === 1) {
      playerScore += points;
    }
    if(result === 2) {
      computerScore += points;
    }
    if(result === 0) {
      computerScore += 0;
      playerScore += 0;
    }
}

function clearScores() {
  playerScore = 0;
  computerScore = 0;
}


playGame(3);
