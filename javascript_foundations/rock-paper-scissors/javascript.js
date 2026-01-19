//computer choice function
//computer choses 0,1,2 (3 choices)
function getComputerChoice(){
    //generates integers between 0 to 2
    //math floor rounds down
    let computerChoice = Math.floor(Math.random() * 3); 
    let result = null;
    if(computerChoice === 0){
        result = "ROCK";
    } else if (computerChoice === 1){
        result = "PAPER";
    } else {
        result = "SCISSORS";
    }
    return result;;
}

//human choice function
function getHumanChoice(){
    let humanChoice = prompt("Enter your choice (Rock, Paper, or Scissors) Results Will Appear In Console: ")
    humanChoice = humanChoice.toUpperCase();
    return humanChoice;
}

function playGame(){
    //variables for scores
    let humanScore = 0;
    let computerScore = 0;

    //play 5 rounds
    for(let i = 0; i <= 4; i++){
        let humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice(); 
        playRound(humanChoice, computerChoice);
    }

     //function for play round
    function playRound(humanChoice, computerChoice){
        //make human choice case insensitive
        humanChoice = humanChoice.toUpperCase();
        //different outcomes for rock, paper and scissors
        if(humanChoice === computerChoice){
            console.log("Tie!");
        } else if (humanChoice === "ROCK") {
            if(computerChoice === "PAPER") {
                console.log("You lose! Paper beats Rock");
                computerScore++;
            } else if(computerChoice === "SCISSORS"){
                console.log("You win! Rock beats Scissors");
                humanScore++;
            }
        } else if(humanChoice === "PAPER"){
            if(computerChoice === "ROCK") {
                console.log("You win! Paper beats Rock");
                humanScore++;
            } else if(computerChoice === "SCISSORS"){
                console.log("You lose! Scissors beats Paper");
                computerScore++
            }
        } else if(humanChoice === "SCISSORS"){
            if(computerChoice === "ROCK") {
                console.log("You lose! Rock beats Scissors");
                computerScore++;
            } else if(computerChoice === "PAPER"){
                console.log("You win! Scissors beats Paper");
                humanScore++;
            }
        }
    }
    gameResults(humanScore, computerScore);   

}

function gameResults(humanScore, computerScore){
    if(humanScore == computerScore){
        console.log("Results: Tie! The score was You: " + humanScore + " and Computer: " + computerScore);
    } else if (humanScore > computerScore){
        console.log("You win! The score was You: " + humanScore + " and Computer: " + computerScore);
    } else {
        console.log("You lose! The score was You: " + humanScore + " and Computer: " + computerScore);
    }
}

playGame();




