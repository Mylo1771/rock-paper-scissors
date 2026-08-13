let playerScore;
let computerScore;

let randomHand = Math.floor(Math.random() * 12);

function getComputerChoice(int) {
    if (int <= 3) {
        console.log('Computer throws...paper!')
    } else if (int > 3 && int <= 7) {
        console.log('Computer throws...Rock')
    } else if (int > 7 && int <= 11) {
        console.log('Computer throws...Scissors')
    } else {
        console.log('Erm, that just happened')
    }
}

function getPlayerChoice() {
    let playerHand = prompt('What hand would you like to play?', "");
}

getComputerChoice(randomHand);