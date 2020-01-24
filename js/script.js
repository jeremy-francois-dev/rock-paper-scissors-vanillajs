// Stock the score of the player and the computer
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');
const divResults = document.createElement('div');
divResults.setAttribute('id', 'results');
// Computer choice with random function
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    
    let pos = getRandomInt(3);
    return choices[pos];
}
// Player against Computer
function playRound(playerSelection, computerSelection) {
        let winP= "";
        let winC= "";
        let result= "";
        if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" 
        || playerSelection == "paper" && computerSelection == "rock" ) {
            result = `You won! ${playerSelection} beat ${computerSelection} .`;
            winP = true;
        } 
        else if(playerSelection == computerSelection) {
            result = `Equality, ${playerSelection} equals ${computerSelection} .`;
        } 
        else {
            result = `You loose! ${playerSelection} doesn't beat ${computerSelection} .`;
            winC = true;    
        }   
        if(winP) {
            playerScore++;
        } else if (winC) {
            computerScore++;
        }
        let score = `You have ${playerScore} and the computer has ${computerScore}`;
        divResults.innerHTML += result + score + "<br>";
        container.appendChild(divResults);
}

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if(playerScore < 5 && computerScore < 5 ) {
        let playerSelection = button.id;
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    } else if (playerScore == 5) {
        alert(`You won the whole game ${playerScore}-${computerScore} !`);
        playerScore = 0;
        computerScore = 0;
        divResults.textContent = "";
    } else if (computerScore == 5) {
        alert(`Sorry Dude, but you loose ${playerScore}-${computerScore} !`);
        playerScore = 0;
        computerScore = 0;
        divResults.textContent = "";
    }
  });
});