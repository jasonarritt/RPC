const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', playGame);
}

function playGame(event) {
  let playerSelection = event.target.innerText;
  let computerSelection = Math.floor(Math.random() * 3);

  if (computerSelection === 0) {
    computerSelection = 'ROCK';
  } else if (computerSelection === 1) {
    computerSelection = 'PAPER';
  } else {
    computerSelection = 'SCISSORS';
  }
  console.log(playerSelection);
  console.log(computerSelection);
  let result = checkWinner(playerSelection, computerSelection);
}

function checkWinner(player, computer) {
  if (player === computer) {
    console.log('D');
    return 'Draw';
  }
  if (player === 'ROCK') {
    if (computer === 'PAPER') {
      console.log('C');
      return 'Computer';
    } else {
      console.log('P');
      return 'Player';
    }
  }
  if (player === 'PAPER') {
    if (computer === 'SCISSORS') {
      console.log('C');
      return 'Computer';
    } else {
      console.log('P');
      return 'Player';
    }
  }
  if (player === 'SCISSORS') {
    if (computer === 'ROCK') {
      console.log('C');
      return 'Computer';
    } else {
      console.log('P');
      return 'Player';
    }
  }
}
