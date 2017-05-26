var playerScore = 0;
var computerScore = 0;

function welcomeMessage() {
  alert("Welcome the good ol' fashion game of Rock, Paper, Scissors! Remember the rules are simple!\nRock Beats Scissors\nScissors Beats Paper\nPaper Beats Rock");
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
    alert("The player has " + playerScore + " points compared to the computer's " + computerScore + " points. So the player wins!");
  }
  else {
    alert("The computer has " + computerScore + " points compared to the player's " + playerScore + " points. So the computer wins!");
  }

  clearScores();

}

function playerGuess() {
 var playerChoice = prompt("Choose rock, paper, or scissors.");
   if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
     //alert("Good job");
     return playerChoice;
   }
  alert("You typed something else or did not spell your choice correctly please try again!");
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
  //Create an alert message detailing the results
  alert("Player chose: " + guess1 + " and the computer chose: " + guess2 + "!");
  //First check for equality
  if(guess1 === guess2) {
    alert("You and the computer guessed the same thing! Go again, no score added!");
    return 0;
  }
  //No check for guess1 winning
  if(
    (guess1 === "rock" && guess2 === "scissors") 
                       ||
    (guess1 === "paper" && guess2 === "rock")
                       ||
    (guess1 === "scissors" && guess2 === "paper"))
    {
   alert("Player wins the round!");
    return 1;
    }
   alert("Computer wins the round!");
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




/*
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.floor(Math.random() * 3) + 1;

if (computerChoice === 1){
    computerChoice = "rock";
}
else if(computerChoice === 2){
    computerChoice = "paper";
}
else{
    computerChoice = "scissors";
}


function compare(userChoice,computerChoice){
    if(userChoice===computerChoice){
        return "The result is a tie!";
    }
    if(userChoice==="rock"){
        if(computerChoice==="scissors"){
            return "rock wins";
        }
        else{
            return "paper wins";
        }
    }
    if(userChoice==="paper"){
        if(computerChoice==="rock"){
            return "paper wins";
        }
        else{
            return "scissors wins";
        }
    }
    if(userChoice==="scissors"){
        if(computerChoice==="rock"){
            return "rock wins";
        }
        else{
            return "scissors wins";
        }
    }
};
var answer = compare(userChoice,computerChoice);
//document.getElementById("results").innerHTML += (compare(userChoice,computerChoice));

document.write(answer);
*/


























/*
var compare = function(choice1,choice2){
    if(choice1===choice2){
        return "The result is a tie!";
    }
    if(choice1==="rock"){
        if(choice2==="scissors"){
            return "rock wins";
        }
        else{
            return "paper wins";
        }
    }
    if(choice1==="paper"){
        if(choice2==="rock"){
            return "paper wins";
        }
        else{
            return "scissors wins";
        }
    }
    if(choice1==="scissors"){
        if(choice2==="rock"){
            return "rock wins";
        }
        else{
            return "scissors wins";
        }
    }
};
compare(userChoice,computerChoice);
console.log(compare);
*/