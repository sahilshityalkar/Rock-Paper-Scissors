// console.log("hello world");
//make a function to return a player selection choice
let playerChoice;
let playerSelection = document.getElementById("myselect");


function myFunction(){
    playerChoice = playerSelection.value;
    document.getElementById("user-choice").innerHTML = "" + playerChoice;
    
}
let computerchoice;
let playerscore = 0;
let computerscore = 0;
function getComputerChoice() {

    let computerSelection = Math.floor((Math.random() * 3) + 1);

    switch (computerSelection) {
        case 1:
            computerchoice = "rock"
            break;
        case 2:
            computerchoice = "paper"
            break;
        case 3:
            computerchoice = "scissors"
            break;
        default:
            break;
    }
    switch (playRound()) {
        case 1:
            computerscore++;
            document.getElementById("result").innerHTML = "result : Computer win the round";
            break;
        case 2:
            playerscore++;
            document.getElementById("result").innerHTML = "result : You win the round";
            break;
        case 3:
            document.getElementById("result").innerHTML = "result : draw the match";
        default:
            break;
    }
}