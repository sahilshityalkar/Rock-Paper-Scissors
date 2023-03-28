let playerchoice;

// let playerSelection = document.getElementById("mySelect");

// function myfunction() {
//     playerchoice = playerSelection.value;
//     document.getElementById("user-choice").innerHTML = ""+ playerchoice;
// }

function rockButton(){
    playerchoice = "rock"
    document.getElementById("user-choice").innerHTML = ""+ playerchoice;
}
function paperButton(){
    playerchoice = "paper"
    document.getElementById("user-choice").innerHTML = ""+ playerchoice;
}
function scissorsButton(){
    playerchoice = "scissors"
    document.getElementById("user-choice").innerHTML = ""+ playerchoice;
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
    if (playerscore == 5) {
        document.getElementById("final_result").innerHTML = "FINAL RESULT : YOU WIN THE MATCH"
        // location.reload();
        playerscore = 0;
        computerscore = 0;
    } else if(computerscore == 5){
        document.getElementById("final_result").innerHTML = "FINAL RESULT : COMPUTER WIN THE MATCH"
        // location.reload();
        playerscore = 0;
        computerscore = 0;
    }else if(computerscore === 5 || playerscore === 5){
        document.getElementById("final_result").innerHTML = "DRAW  THE MATCH"
        // location.reload();
    }
    else if(playerscore === 0 || computerscore === 0)(
        document.getElementById("final_result").innerHTML = "START THE MATCH"
    )

    document.getElementById("computer-choice").innerHTML = ""+ computerchoice;
    document.getElementById("result-user").innerHTML = + playerscore;
    document.getElementById("result-computer").innerHTML = + computerscore;
    playGround = playRound();
    return computerchoice;
}
let playGround;
function playRound() {
    if (playerchoice === computerchoice) {
        return 3;
    }
    else if (playerchoice == "rock") {
        if (computerchoice == "paper") {
            return 1;
        }
        else {
            return 2;
        }
    }
    else if (playerchoice == "scissors") {
        if (computerchoice == "rock") {
            return 1;
        }
        else {
            return 2;
        }
    }
    else if (playerchoice == "paper") {
        if (computerchoice == "scissors") {
            return 1;
        }
        else {
            return 2;
        }
    }
}