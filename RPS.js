// console.log("hello world");
//make a function to return a player selection choice
let playerChoice;
let playerSelection = document.getElementById("myselect");


function myFunction(){
    playerChoice = playerSelection.value;
    document.getElementById("user-choice").innerHTML = "" + playerChoice;
    
}
