//Paper Rock Scissors Game.
const prompt = require("prompt-sync")();

//Create a Function (getPlayerChoice) to Grab user inputs as choice of paper, rock or scissors
function getPlayerChoice(){
    const playerChoice = prompt("Please Insert Choice, Paper, Rock or Scissors!");
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

//Make user input Case insensitive
//Create a Function (getComputerChoice)to get computer Choice
//Create a Function (playRound) to call getPlayerChoice and getComputerChoice to play one round of the game
//Craete a function (game) to call all three functions and loop the game to play five rounds and update scores.