// Homepage to Game page
document.getElementById('page-home-btn').addEventListener('click', function() {
    hideElementById('page-home');
    showElementById('page-playground');
    continueGame();
})

function handleKeyboardKeyUpEvent(event) {
    let playerPressed = event.key;
    // console.log(playerPressed);
    let currentAlphabetElement = document.getElementById('random-character');
    // console.log(currentAlphabet);
    let currentAlphabet = currentAlphabetElement.innerText;
    console.log(currentAlphabet);
    // console.log(playerPressed, currentAlphabet);
    if(playerPressed === currentAlphabet) {
        // console.log('you get a point');
        // update score
        // 1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        // console.log(currentScoreText);
        // 2. increase the score by 1
        const newScore = currentScore+1;
        // 3. show the updated score
        currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColor(currentAlphabet);
        continueGame();
    } else {
        // console.log('you lost a life');
        // step-1: get the current Life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        // step-2: reduce the life count
        const newLife = currentLife - 1;

        // step-3: display the updated life count
        currentLifeElement.innerText = newLife;

    }
    
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame() {
    let alphabet = document.getElementById('random-character');
    let randomAlphabet = getARandomAlphabet();
    alphabet.innerText = randomAlphabet;
    setBackgroundColor(randomAlphabet);
}