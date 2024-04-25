// 0 = Rock, 1 = Paper, 2 = Scissors
// 0 = tie, 1 = win, 2 = loss

/* playGame(); */

//gets the computers choice of either rock paper or scissors
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        choice = "Rock";
    }
    else if (choice === 1){
        choice = "Paper";
    }

    else{
        choice = "Scissors";
    }
    return choice;
}
//gets the users choice 
/* function getUserChoice(){
   let choice = prompt("Rock, Paper or Scissors?");

   let choiceUpper = choice.slice(0, 1);
   choiceUpper = choiceUpper.toUpperCase();

   let choiceLower = choice.slice(1);
   choiceLower = choiceLower.toLowerCase();
   return choiceUpper + choiceLower;
} */
//plays a round of rps by comparing user input to computerChoice 
function playRound(userChoice, computerChoice){
    let result;
    if (userChoice == "Rock"){
        switch (computerChoice){
            case "Rock":
                console.log("Rock ties against Rock, you tie");
                result = 0;
                return result;
            case "Paper":
                console.log("Rock gets beaten by Paper, you lose");
                result = 2;
                return result;
            case "Scissors":
                console.log("Rock beats Scissors, you win");
                return result = 1;
        }
        return result;
    }
    else if (userChoice == "Paper"){
        switch (computerChoice){
            case "Rock":
                console.log("Paper beats Rock, you win");
                return result = 1;
            case "Paper":
                console.log("Paper ties against Paper, you tie");
                return result = 0;
            case "Scissors":
                console.log("Paper gets beaten by Scissors, you lose");
                return result = 2;
        }
    }
    else if (userChoice == "Scissors"){
        switch (computerChoice){
            case "Rock":
                console.log("Scissors gets beaten by Rock, you lose");
                return result = 2;
            case "Paper":
                console.log("Scissors beats Paper, you win");
                return result = 1;
            case "Scissors":
                console.log("Scissors ties against Scissors, you tie");
                return result = 0;
        }
    }
}
//plays a full match bo3 of rps
/* function playGame(){
    let userWins = 0;
    let computerWins = 0;
    while(userWins < 3 && computerWins < 3){
        let result = playRound(getUserChoice(), getComputerChoice());

        if (result == 1){
            userWins++;
        }
        else if (result == 2){
            computerWins++;
        }
    }
    if (userWins == 3){
        console.log("You Win!");
    }
    else if (computerWins == 3){
        console.log("You Lose!");
    }
} */
const rButton = document.querySelector("#rButton");
const pButton = document.querySelector("#pButton");
const sButton = document.querySelector("#sButton");

rButton.addEventListener("click", () => playRound("Rock", getComputerChoice()));
pButton.addEventListener("click", () => playRound("Paper", getComputerChoice()));
sButton.addEventListener("click", () => playRound("Scissors", getComputerChoice()));