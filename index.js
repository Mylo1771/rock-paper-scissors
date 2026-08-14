function getPlayerChoice() {
    playerHand = prompt('What hand would you like to play?', '').toLowerCase();
    console.log('Player chose... ' + playerHand);
    return playerHand
    
}

function getComputerChoice() {
    let computerHand = Math.floor(Math.random() * 12);
    if (computerHand <= 3) {
        alert('Computer chose...paper!')
        console.log('Computer chose...paper!')
        console.log("#################")
        return 'paper';
    } else if (computerHand > 3 && computerHand <= 7) {
        alert('Computer chose...rock!')
        console.log('Computer chose...rock!')
        console.log("#################")
        return 'rock';
    } else if (computerHand > 7 && computerHand <= 11) {
        alert('Computer chose...scissors!')
        console.log('Computer chose...scissors!')
        console.log("#################")
        return 'scissors'
    } else {
        alert('Erm, that just happened')
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('it is a tie!')
        console.log("#################")
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('Paper covers rock. You lose!')
        console.log("#################")
        ++computerScore
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('Rock crushes scissors! You win!')
        console.log("#################")
        ++playerScore
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You covered the enemy. You win!')
        console.log("#################")
        ++playerScore
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('No! You are being cut up! You lose!')
        console.log("#################")
        ++computerScore
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You are about to be crushed! You lose!')
        console.log("#################")
        ++computerScore
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You can cut them up! Great job! You win!')
        console.log("#################")
        ++playerScore
    }
}

let computerScore = 0;
let playerScore = 0;

function showScore(compScore, userScore) {
    if (userScore === 0 && compScore === 0) {
        return console.log('The player scored ' + playerScore + 
            ' and the computer scored ' + computerScore + 
            ' . Its a draw!')
        
    } else if (compScore > userScore) {
        return console.log('The player scored ' + playerScore + 
            ' and the computer scored ' + computerScore + 
            ' . You lose!')
        
    } else if (userScore > compScore) {
        return console.log('The player scored ' + playerScore + 
            ' and the computer scored ' + computerScore + 
            ' . You win!')
    }
}

function playGame(count = 5) {
    if (count <= 0) {
        showScore(computerScore, playerScore);
        return;
    }
   
    const humanSelection = getPlayerChoice();
    const computerSelection = getComputerChoice(); 
    
    playRound(humanSelection, computerSelection);

    playGame(count - 1);
}

playGame();