const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
let winner = [0, 0];

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

  console.log(result);

  if (result == 'Player') {
    result += ' Wins!';
    winner[0]++;
  } else if (result == 'Computer') {
    result += ' Wins.';
    winner[1]++;
  } else {
    result = 'There was a Draw. No winner.';
  }
  score.innerHTML = 'Player 1 [' + winner[0] + '] Player 2 [' + winner[1] + ']';
  messenger(
    playerSelection + ' vs ' + computerSelection + '<br>' + result + '</br>'
  );
  console.log(result);
}

function checkWinner(player, computer) {
  if (player === computer) {
    return 'Draw';
  }
  if (player === 'ROCK') {
    if (computer === 'PAPER') {
      return 'Computer';
    } else {
      return 'Player';
    }
  }
  if (player === 'PAPER') {
    if (computer === 'SCISSORS') {
      return 'Computer';
    } else {
      return 'Player';
    }
  }
  if (player === 'SCISSORS') {
    if (computer === 'ROCK') {
      return 'Computer';
    } else {
      return 'Player';
    }
  }
}

function messenger(mes) {
  message.innerHTML = mes;
}
