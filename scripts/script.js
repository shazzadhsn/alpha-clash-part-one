// Homepage to Game page
document.getElementById('page-home-btn').addEventListener('click', function() {
    hideElementById('page-home');
    showElementById('page-playground');
    continueGame();
})

function handleKeyboardKeyUpEvent(event) {
    let playerPressed = event.key;
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

    }
    
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame() {
    let alphabet = document.getElementById('random-character');
    let randomAlphabet = getARandomAlphabet();
    alphabet.innerText = randomAlphabet;
    setBackgroundColor(randomAlphabet);
}