// 0 = Rock, 1 = Paper, 2 = Scissors
// 0 = tie, 1 = win, 2 = loss
const buttons = document.querySelectorAll("button");
const container = document.querySelector("#container")
let gameResult = document.createElement("div");
container.appendChild(gameResult)

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
//plays a round of rps by comparing user input to computerChoice 
function playRound(userChoice, computerChoice){
    let result;
    if (userChoice == "Rock"){
        switch (computerChoice){
            case "Rock":
                gameResult.innerText = "Rock ties against Rock, you tie";
                result = 0;
                return result;
            case "Paper":
                gameResult.innerText = "Rock gets beaten by Paper, you lose"
                result = 2;
                return result;
            case "Scissors":
                gameResult.innerText = "Rock beats Scissors, you win"
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

buttons.forEach((button) => {
    let result;
    button.addEventListener("click", () => {
        result = playRound(button.id, getComputerChoice())
        return result;
    });
    return result;
});