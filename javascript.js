// 0 = Rock, 1 = Paper, 2 = Scissors
// 0 = tie, 1 = win, 2 = loss
const buttons = document.querySelectorAll("button");
const container = document.querySelector("#container");
const scoreContainer = document.querySelector("#score");
const userScore = document.createElement("div");
const computerScore = document.createElement("div");
const gameResult = document.createElement("div");
container.appendChild(gameResult)
scoreContainer.appendChild(userScore)
scoreContainer.appendChild(computerScore)

playGame();

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
               gameResult.innerText= "Paper beats Rock, you win";
                return result = 1;
            case "Paper":
                gameResult.innerText = "Paper ties against Paper, you tie"
                return result = 0;
            case "Scissors":
                gameResult.innerText = "Paper gets beaten by Scissors, you lose";
                return result = 2;
        }
    }
    else if (userChoice == "Scissors"){
        switch (computerChoice){
            case "Rock":
                gameResult.innerText = "Scissors gets beaten by Rock, you lose";
                return result = 2;
            case "Paper":
                gameResult.innerText = "Scissors beats Paper, you win";
                return result = 1;
            case "Scissors":
                gameResult.innerText = "Scissors ties against Scissors, you tie";
                return result = 0;
        }
    }



}
//Assigns buttons to user input and plays a round of rps
//also keeps track of score and outputs a winner
function playGame(){
    let result;
    let userWins = 0;
    let computerWins = 0;
    userScore.innerText = "You: " + userWins;
    computerScore.innerText = "Foe: " + computerWins;
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            result =  playRound(button.id, getComputerChoice())
            
            if (result == 1){
                userWins++;
                userScore.innerText = "You: " + userWins;
            }
        
            else if (result == 2){
                computerWins++;
                computerScore.innerText = "Foe: " + computerWins;
            }
        
            if (userWins == 5){
                alert("You Win!");
                userWins = 0;
                computerWins = 0;
                computerScore.innerText = "Foe: " + computerWins;
                userScore.innerText = "You: " + userWins;
            }
            
            else if (computerWins == 5){
                alert("You Lose")
                userWins = 0;
                computerWins = 0;
                computerScore.innerText = "Foe: " + computerWins;
                userScore.innerText = "You: " + userWins;
            } 
        });
    });
}

