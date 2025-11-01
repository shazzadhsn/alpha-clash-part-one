// Homepage to Game page
document.getElementById('page-home-btn').addEventListener('click', function() {
    hideElementById('page-home');
    showElementById('page-playground');
    continueGame();
})

function continueGame() {
    let alphabet = document.getElementById('random-character');
    let randomAlphabet = getARandomAlphabet();
    alphabet.innerText = randomAlphabet;
    setBackgroundColor(randomAlphabet);
}