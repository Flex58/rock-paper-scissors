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
function getUserChoice(){
   let choice = prompt("Rock, Paper or Scissors?");

   let choiceUpper = choice.slice(0, 1);
   choiceUpper = choiceUpper.toUpperCase();

   let choiceLower = choice.slice(1);
   choiceLower = choiceLower.toLowerCase();
   return choiceUpper + choiceLower;
}
//plays a round of rps by comparing user input to computerChoice 
function playRound(userChoice, computerChoice){
    let result;
    if (userChoice == "Rock"){
        switch (computerChoice){
            case "Rock":
                console.log("Rock ties against Rock, you tie");
                result = 0;
                break;
            case "Paper":
                console.log("Rock gets beaten by Paper, you lose");
                result = 2;
                break;
            case "Scissors":
                console.log("Rock beats Scissors, you win");
                result = 1;
                break;
        }
        console.log(result);
    }
    else if (userChoice == "Paper"){
        switch (computerChoice){
            case "Rock":
                console.log("Paper beats Rock, you win");
                result = 1;
                break;
            case "Paper":
                console.log("Paper ties against Paper, you tie");
                result = 0;
                break;
            case "Scissors":
                console.log("Paper gets beaten by Scissors, you lose");
                result = 2;
                break;
        }
        console.log(result);
    }
    else if (userChoice == "Scissors"){
        switch (computerChoice){
            case "Rock":
                console.log("Scissors gets beaten by Rock, you lose");
                result = 2;
                break;
            case "Paper":
                console.log("Scissors beats Paper, you win");
                result = 1;
                break;
            case "Scissors":
                console.log("Scissors ties against Scissors, you tie");
                result = 0;
                break;
        }
        console.log(result);
    }
    else{
        playRound(getUserChoice(), getComputerChoice());
    }
    return result;
}
playRound(getUserChoice(),getComputerChoice());

// 0 = Rock, 1 = Paper, 2 = Scissors
// 0 = tie, 1 = win, 2 = loss