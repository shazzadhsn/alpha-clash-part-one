// Homepage to Game page
document.getElementById('page-home-btn').addEventListener('click', function() {
    hideElementById('page-home');
    showElementById('page-playground');
    continueGame();
})

// Handle keyboard events execution function
function handleKeyboardKeyUpEvent(event) {
    let playerPressed = event.key;

    if(playerPressed === 'Escape') {
        gameOver();
    }

    let currentAlphabetElement = document.getElementById('random-character');
    let currentAlphabet = currentAlphabetElement.innerText;
    console.log(currentAlphabet);

    if(playerPressed === currentAlphabet) {
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);
        removeBackgroundColor(currentAlphabet);
        continueGame();
    } else {
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife == 0) {
            gameOver();
            finalScoreSet();
        }
    }
}

function gameOver() {
    hideElementById('page-playground');
    showElementById('page-score');
}

const playAgain = document.getElementById('play-again-btn');
playAgain.addEventListener('click', againPlay);

function againPlay() {
    hideElementById('page-score');
    showElementById('page-playground');
    setTextElementValueById('current-score', 0);
    setTextElementValueById('current-life', 5);
}

// Handle keyboard event
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

// repeat game if score updated
function continueGame() {
    let alphabet = document.getElementById('random-character');
    let randomAlphabet = getARandomAlphabet();
    alphabet.innerText = randomAlphabet;
    setBackgroundColor(randomAlphabet);
}