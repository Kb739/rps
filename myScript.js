const options = ['rock', 'paper', 'scissors'];
const maxRounds = 5;
let round = 0;
let gameover = false;
let playerScore = 0,
    computerScore = 0;

// acquire references 
const playerColumn = document.querySelector('#first');
const scoreColumn = document.querySelector('#second');
const cpuColumn = document.querySelector('#third');
const footer = document.querySelector('footer>h1');
const table = document.querySelector('#content');
//

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => btn.addEventListener('click', battle));

function battle(e) {
    reset();
    if (round++ < maxRounds) {
        const result = playRound(playerPlay(e), computerPlay());

        let entry_left = 0,
            entry_right = 0;

        if (result != null) {
            if (result) {
                playerScore++;
                entry_left = 1;
            }
            else {
                computerScore++;
                entry_right = 1;
            }
        }

        let node = document.createElement('li');
        node.textContent = `${entry_left} ---- ${entry_right}`;
        scoreColumn.appendChild(node);
    }
    else {
        announceWinner();
        gameover = true;
    }
}

function playRound(playerSelection, computerSelection) {
    //returns null for draw and true if player wins the round , false otherwise
    const len = options.length;
    if (computerSelection == playerSelection)//for draw
        return null;
    return (playerSelection + 1) % len == computerSelection ? false : true;
}

function playerPlay(e) {
    const buttonPressed = e.target.id;
    let choice = 0;
    switch (buttonPressed) {
        case 'rock': choice = 0; break;
        case 'paper': choice = 1; break;
        case 'scissor': choice = 2; break;
    }
    let node = document.createElement('li');
    node.textContent = `${options[choice]} `;
    playerColumn.appendChild(node);
    return choice;
}

function computerPlay() {
    //computer selects random value from the options array
    const index = Math.floor(Math.random() * 3);
    let node = document.createElement('li');
    node.textContent = `${options[index]} `;
    cpuColumn.appendChild(node);
    return index;
}

function announceWinner() {
    footer.textContent = playerScore > computerScore ? "You Win" :
        playerScore == computerScore ? "Its a Draw" : "You Lose";
}

function reset() {
    if (gameover) {

        gameover = false;
        round = 0;
        playerScore = 0,
            computerScore = 0;

        //delete all appended nodes for rematch
        const listNode = document.querySelectorAll('#content>ul>li');
        listNode.forEach((node) => node.remove());
        footer.textContent = '';
    }
    else 
    {
        let style=window.getComputedStyle(table);
        if(style.getPropertyValue('visibility')=='hidden')
                table.style.visibility='visible';
    }


}


