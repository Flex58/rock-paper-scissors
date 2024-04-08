
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

function getUserChoice(){
   let choice = prompt("Rock, Paper or Scissors?");

   let choiceUpper = choice.slice(0, 1);
   choiceUpper = choiceUpper.toUpperCase();

   let choiceLower = choice.slice(1);
   choiceLower = choiceLower.toLowerCase();
   return choiceUpper + choiceLower;
}
console.log(getUserChoice());
// 0 = Rock, 1 = Paper, 2 = Scissors