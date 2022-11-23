//Paper Rock Scissors Game.
const prompt = require("prompt-sync")();

//Create a Function (getPlayerChoice) to Grab user inputs as choice of paper, rock or scissors
//Make user input Case insensitive
function getPlayerChoice(){
    const playerChoice = (prompt("Please Insert Choice, Paper, Rock or Scissors!")).toUpperCase;
    if (playerChoice == "PAPER" && playerChoice != " "){
        console.log(`You Choose: Paper`);
        return "Paper";
    }else if (playerChoice == "ROCK" && playerChoice !== " "){
        console.log(`You Choose: Rock`);
        return "Rock"
    }else if (playerChoice == "SCISSORS" && playerChoice != " "){
        console.log(`You Choose: Scissors`);
        return "Scissors"
    }else {
        console.log("Please Insert a Valid Choice of Rock, Paper or Scissors!")
    }
} 
//getPlayerChoice();

//Create a Function (getComputerChoice)to get computer Choice
function getComputerChoice(){ 
    const computerChoice = (Math.random());
    if (computerChoice <= 0.35){
        console.log(`Computer Choose: Paper`);
        return "Paper";
    }else if (computerChoice <= 0.70){
        console.log(`Computer Choose: Rock`);
        return "Rock";
    }else {
        console.log(`Computer Choose: Scissors`);
        return "Scissors"
    }
}
//getComputerChoice();

//Create a Function (playRound) to call getPlayerChoice and getComputerChoice to play one round of the game
//Craete a function (game) to call all three functions and loop the game to play five rounds and update scores.