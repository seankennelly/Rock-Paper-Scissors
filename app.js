// --------------- PAGE ELEMENTS -------------------
const main = document.getElementsByTagName('main');
const optionsContainer = document.querySelector('.options');
const resultsContainer = document.querySelector('.results-container');
const gameOverScreen = document.querySelector('.game-over-container');
const reloadButton = document.querySelector('.reload');
let resultsList = '';
let totalsContainer = '';

const playOptions = [
  {
    name: "Rock",
    imgSrc: "rock.png"
  },
  {
    name: "Paper",
    imgSrc: "paper.png"
  },
  {
    name: "Scissors",
    imgSrc: "scissors.png"
  },
];

// LOOP TO CREATE OPTIONS
for (let option of playOptions) {
  // CREATE ELEMENTS
  const optionsBox = document.createElement('div');
  const optionImg = document.createElement('img');
  const optionPara = document.createElement('p');
  // IMAGE DETAILS
  optionImg.src = `./assets/${option.imgSrc}`;
  optionImg.alt = `An emoji representation of ${option.name}`;
  optionsBox.append(optionImg);
  // TEXT DETAILS
  optionPara.innerText = option.name;
  optionsBox.append(optionPara);
  optionsBox.setAttribute('class', 'optionsBox');
  optionsBox.setAttribute('id', option.name);
  // ADD TO PAGE
  optionsContainer.append(optionsBox);
}
// SELECT OPTION ELEMENT DIVS
const rockDiv = document.getElementById('Rock');
const paperDiv = document.getElementById('Paper');
const scissorsDiv = document.getElementById('Scissors');

// ------------ GAME MECHANICS ----------------------------
// RANDOM COMPUTER CHOICE
const computerPlay = () => {
  return playOptions[Math.floor(Math.random() * 3)].name;
};
// PLAY ROUND
const playRound = (playerSelection, computerSelection) => {
  const selection = playerSelection;
  if (selection === computerSelection) {
    return { result: 'draw', msg: `You drew! You both picked ${selection}.` }
  } else if
    (
    selection === 'Rock' && computerSelection === 'Paper'
    || selection === 'Paper' && computerSelection === 'Scissors'
    || selection === 'Scissors' && computerSelection === 'Rock'
  ) {
    return { result: 'loss', msg: `You lose! The computer's ${computerSelection} beats your ${selection}!` }
  } else {
    return { result: 'win', msg: `You win! Your ${selection} beats the computer's ${computerSelection}!` }
  };
};

// PLAY GAME
let roundNum = 0;
let playerScore = 0;
let computerScore = 0;
let result = '';
let listAlreadyExists = false;

const game = (selection) => {
  const playerSelection = selection;
  const computerSelection = computerPlay();
  const resultListItem = document.createElement('li');
  const finalResultListItem = document.createElement('li');

  // PLAYS ROUND OF ROCK PAPER SCISSORS
  const round = playRound(playerSelection, computerSelection);
  roundNum++;
  if (round.result === 'loss') {
    computerScore++;
    resultListItem.setAttribute('class', 'loss');
  } else if (round.result === 'win') {
    playerScore++;
    resultListItem.setAttribute('class', 'win');
  };

  // CHECKS IF RESULT LIST EXISTS (OR HAS BEEN DELETED BY BUTTONS)
  if (!resultsList) {
    resultsList = document.createElement('ul');
    resultsList.setAttribute('class', 'round-results');
  };

  if (!totalsContainer) {
    totalsContainer = document.createElement('div');
    totalsContainer.setAttribute('class', 'game-totals');
  };

  // POPULATES LIST WITH ROUND SCORE
  resultListItem.innerText = `Round ${roundNum}: ${round.msg}`
  resultsList.append(resultListItem);
  resultsContainer.append(resultsList);

  // CHECK IF FIVE ROUND HAVE BEEN PLAYED, GIVE RESULT
  if (roundNum >= 5) {
    // Final score output
    if (computerScore > playerScore) {
      result = "Sorry, you lost.";
      finalResultListItem.setAttribute('class', 'loss');
    } else if (computerScore < playerScore) {
      result = "You won!";
      finalResultListItem.setAttribute('class', 'win');
    } else if (computerScore === playerScore) {
      result = "Overall it was a draw.";
    };

    // CREATE TOTAL SCORE HEADING, LIST, LIST ITEMS AND ADDS TO DOM
    const h2 = document.createElement('h2');
    h2.innerText = 'Total Scores';
    const totalUl = document.createElement('ul');
    const computerScoreLi = document.createElement('li');
    computerScoreLi.innerText = `Computer Score = ${computerScore}`;
    const playerScoreLi = document.createElement('li');
    playerScoreLi.innerText = `Player Score = ${playerScore}`;
    finalResultListItem.innerText = `Result: ${result}`;
    resultsContainer.setAttribute('style', 'justify-content: space-between',);
    totalsContainer.setAttribute('style', 'width: 250px',);
    totalUl.append(computerScoreLi, playerScoreLi, finalResultListItem);
    totalsContainer.append(h2, totalUl);
    resultsList.insertAdjacentElement('afterend', totalsContainer);
  };

  // FOR TESTING - TO BE DELETED
  console.log('ROUNDNUM:' + roundNum);
  console.log(playerScore);
  console.log(computerScore);
  console.log(result);
};

// CREATE BUTTONS
const restartButton = document.createElement('button');
const quit = document.createElement('button');
let buttonHasBeenCalled = false;
function executeOnce() {
  return function () {
    if (!buttonHasBeenCalled) {
      restartButton.innerText = 'Restart';
      restartButton.setAttribute('class', 'restart');
      resultsContainer.insertAdjacentElement('afterend', restartButton);
      quit.innerText = 'Quit';
      quit.setAttribute('class', 'quit');
      restartButton.insertAdjacentElement('afterend', quit);
      buttonHasBeenCalled = true;
    }
  }
};
const addButtons = executeOnce();

// EVENT LISTENERS TO CALL GAME FUNCTION
rockDiv.addEventListener('click', () => {
  game('Rock');
  addButtons();
  // checkIfResultListExists();
})
paperDiv.addEventListener('click', () => {
  game('Paper');
  addButtons();
});
scissorsDiv.addEventListener('click', () => {
  game('Scissors');
  addButtons();
});

// RESTART & QUIT BUTTON FUNCTIONS
restartButton.addEventListener('click', () => {
  roundNum = 0;
  playerScore = 0;
  computerScore = 0;
  result = '';
  while(resultsList.firstChild) {resultsList.firstChild.remove()};
  resultsList.remove();
  while(totalsContainer.firstChild) {totalsContainer.firstChild.remove()};
  totalsContainer.remove();
  restartButton.remove();
  quit.remove();
  buttonHasBeenCalled = false;
  console.log("ROUND NUM AFTER RESTART:" + roundNum)
});

quit.addEventListener('click', () => {

});

reloadButton.addEventListener()


// Close game after 5!