const rollDiceBtn = document.getElementById('rollDiceBtn');
const player1PointsDisplay = document.getElementById('player1Points');
const player2PointsDisplay = document.getElementById('player2Points');
const roundCounterDisplay = document.getElementById('roundCounter');
const player1DiceImg = document.getElementById('player1DiceImg');
const player2DiceImg = document.getElementById('player2DiceImg');
let announcement = document.getElementById('announcement');
let winner = document.getElementById('winner');

let round = 0;
let player1Points = 0;
let player2Points = 0;


function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function updatePoints(player, points) {
    if (player === 1) {
        player1Points += points;
        player1PointsDisplay.textContent = player1Points;
    } else {
        player2Points += points;
        player2PointsDisplay.textContent = player2Points;
    }
}

function updateDiceImages(player, diceValue) {
    const imagePath = `dice${diceValue}.png`;
    if (player === 1) {
        player1DiceImg.src = imagePath;
    } else {
        player2DiceImg.src = imagePath;
    }
}

function newRound() {
    round++;
    roundCounterDisplay.textContent = round;
    const player1Dice = rollDice();
    const player2Dice = rollDice();
    updateDiceImages(1, player1Dice);
    updateDiceImages(2, player2Dice);
    announcer(player1Dice, player2Dice);
    if (player1Dice > player2Dice) {
        updatePoints(1, 1);
        if (player1Points === 5) {
            gameWinner()
        } 
    } else if (player2Dice > player1Dice) {
        updatePoints(2, 1);
        if (player2Points === 5) {
            gameWinner()
        }
    }
}

function announcer(player1Dice, player2Dice) {
    if (player1Dice > player2Dice) {
        announcement.innerText = 'Player 1 wins the round!';
    } else if (player1Dice < player2Dice) {
        announcement.innerText = 'Player 2 wins the round!';
    } else {
        announcement.innerText = 'It\'s a tie!';
    }
}

function gameWinner() {
    if (player1Points == 5) {
        winner.innerText = 'Player 1 wins the game!'
        announcement.innerText = ''
    } else {
        winner.innerText = 'Player 2 wins the game!'
        announcement.innerText = ''
    }
}

function resetGame() {
    player1Points = 0
    player1PointsDisplay.innerText  = ''
    player2Points = 0
    player2PointsDisplay.innerText  = ''
    announcement.innerText = ''
    winner.innerText = ''
    round = 0
    roundCounterDisplay.textContent = ''
    console.log('game resetting');
}

rollDiceBtn.addEventListener('click', newRound);
