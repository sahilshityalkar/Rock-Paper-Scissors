// console.log("hello world");

function myFunction(){
    let playerSelection = document.getElementById("mySelect").value;
    document.getElementById("user-choice").innerHTML = "You selected: " + playerSelection;
    
}

let computerselection;

function getComputerChoice(){
    const randomeNumber = math.floor(math.randomeNumber() * 3 ) +1;

    switch(randomeNumber){
        case 1 :
            computerselection = "rock";
            break;
        case 2 :
            computerselection = "paper";
            break;
        case 3 :
            computerselection = "Scissors";
            break;
    }
}