//init scores of the game & num of rounds
let humanScore = 0;
let compScore = 0;
let numRounds = 0;

//elements to diplay round and final score
const roundScore = document.querySelector('#roundScore');
const finalScore = document.querySelector('#finalScore');
const trackRound = document.querySelector('#trackRound');

//reset init and fxn
const resetContainer = document.querySelector('#resetContainer');
resetContainer.addEventListener('click', resetGame);

//init & function of each button & get human choice
const buttRock = document.querySelector('#buttRock');
const buttPaper = document.querySelector('#buttPaper');
const buttScissor = document.querySelector('#buttScissor');
buttRock.addEventListener('click', () => playRound('Rock'));
buttPaper.addEventListener('click', () => playRound('Paper'));
buttScissor.addEventListener('click', () => playRound('Scissor'));

//init toggle button to be turned on
function toggleChoice(enable) {
  buttRock.disabled = !enable;
  buttPaper.disabled = !enable;
  buttScissor.disabled = !enable;
}

// fxn to get computer choice
const getComputerChoice = () => {
  const listChoice = ['Rock', 'Paper', 'Scissor'];
  let randomIndex = Math.floor(Math.random() * listChoice.length);
  let randomChoice = listChoice[randomIndex];
  return randomChoice;
};

// fnx to play each round with human input
function playRound(humanChoice) {
  //calls for computer choice here each time fxn is called
  const compChoice = getComputerChoice();
  const outcome = { Rock: 'Scissor', Scissor: 'Paper', Paper: 'Rock' };

  //clear previous round scores
  trackRound.textContent = '';

  //clear previous round num
  numRounds.textContent = '';

  //Determine result of each round
  if (humanChoice === compChoice) {
    roundScore.textContent = `Its a tie! Both chose ${humanChoice}.`;
    numRounds++;
  } else if (outcome[humanChoice] === compChoice) {
    roundScore.textContent = `Human win! ${humanChoice} beats ${compChoice}.`;
    humanScore++;
    numRounds++;
  } else {
    roundScore.textContent = `Comp win! ${compChoice} beats ${humanChoice}.`;
    compScore++;
    numRounds++;
  }

  // Update score of each round and display
  trackRound.innerHTML += `<p>Round: ${numRounds}</p>`;
  roundScore.innerHTML += `<p>Current Score: Human - ${humanScore} | Comp - ${compScore}</p>`;

  //check if game is over and calls endGame()
  if (humanScore === 5 || compScore === 5) {
    endGame();
  }
}

//function at end of game
function endGame() {
  if (humanScore === 5) {
    finalScore.textContent = `Player wins! Final Score - Human: ${humanScore} | Computer: ${compScore}`;
  } else {
    finalScore.textContent = `Comp wins! Final Score - Human: ${humanScore} | Computer: ${compScore}`;
  }

  //disable choice buttons and display reset button
  resetContainer.style.display = 'block';
  toggleChoice(false);
}

// function to reset game
function resetGame() {
  //clears display for reset
  trackRound.textContent = '';
  roundScore.textContent = '';
  finalScore.textContent = '';
  //clears scores for reset
  humanScore = 0;
  compScore = 0;
  numRounds = 0;

  //hide reset button & enable choice buttons
  toggleChoice(true);
  resetContainer.style.display = 'none';
}
//init game
resetGame();
