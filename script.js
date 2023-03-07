function getComputerChoice () {
    let computerSelection = Math.floor(Math.random() * 3 );
    
    switch (computerSelection) {
        case 0:
            computerSelection = "ROCK";
            break;
        case 1:
            computerSelection = "PAPER";
            break;
        case 2:
            computerSelection = "SCISSORS";
            break;
    }

    return computerSelection;
}

function getPlayerInput() {
    let playerInput = prompt("Rock, Paper or Scissors?");
    playerInput = playerInput.toUpperCase();
    return playerInput;
}


function playRound (playerInput, computerSelection) {
    console.log("Player: " + playerInput 
    + "\n Computer: " + computerSelection);

    if (playerInput == computerSelection) {
        console.log("TIE");
        ties = ++ties;
    }
    else if (playerInput == "ROCK" 
    && computerSelection == "SCISSORS") {
        console.log("You WIN")
        wins = ++wins;

    }
    else if (playerInput == "PAPER" 
    && computerSelection == "ROCK") {
        console.log("You WIN")
        wins = ++wins;

    }
    else if (playerInput == "SCISSORS" 
    && computerSelection == "PAPER") {
        console.log("You WIN")
        wins = ++wins;

    }
    else {
        console.log("You LOSE");
        losses = ++losses;
    }   

    console.log("Wins: " + wins
    + "\nTies: " + ties
    + "\nLosses: " + losses);
    roundCount = ++roundCount;

}

let roundCount = 0;
let wins = 0;
let losses = 0;
let ties = 0;


while (roundCount != 5) {
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    
    playerInput = getPlayerInput();
    console.log(playRound(playerInput, computerSelection));

}

if (wins > losses && wins > ties) {
    console.log("YOU WIN THE MATCH");
} else if ( ties > wins && ties > losses) {
    console.log("STALEMATE");
} else {
    console.log("COMPUTER WINS THE MATCH");
}



    



