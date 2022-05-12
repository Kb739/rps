let options = ['rock', 'paper', 'scissors'];

game(3);

function game(rounds = 5) {

    console.assert(rounds & 1, "rounds cannot be even");

    let playerScore = 0,
        computerScore = 0;

    for (let i = 0; i < rounds; i++) {
        playRound(playerPlay(), computerPlay()) ? playerScore++ : computerScore++;
        console.log(`Player = ${playerScore} , Computer = ${computerScore}`);
    }
    playerScore > computerScore ? alert("you win") : alert("you loose");
}

function playRound(playerSelection, computerSelection) {
    //returns true if player wins the round , false otherwise

    const indexOfPlayer = options.indexOf(playerSelection);
    const indexOfComputer = options.indexOf(computerSelection);
    const len = options.length;
    return (indexOfPlayer + 1) % len == indexOfComputer ? false : true;
}

function playerPlay() {
    //prompts player to enter choice ,loops until valid choice is found

    let choice = prompt("Enter choice");
    if (!choice) {
        alert("invalid input");
        playerPlay();
    }
    choice = options.find((value) => value == choice.toLowerCase()) || playerPlay();

    return choice;
}

function computerPlay() {
    //computer selects random value from the options array

    const index = Math.floor(Math.random() * 3);
    return options[index];
}