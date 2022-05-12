let options = ['rock', 'paper', 'scissors'];

function playRound(playerSelection, computerSelection) {

    const indexOfPlayer = options.indexOf(playerSelection);
    const indexOfComputer = options.indexOf(computerSelection);
    const len = options.length;
    return (indexOfPlayer + 1) % len == indexOfComputer ? false : true;

}
function playerPlay() {

    let choice = prompt("Enter choice").toLowerCase();
    choice = options.find((value) => value == choice);
    if (!choice) {
        alert("invalid input");
        playerPlay();
    }
    return choice;

}
function computerPlay() {

    const index = Math.floor(Math.random() * 3);
    return options[index];
}