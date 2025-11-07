function hideElementById(elementId) {
    document.getElementById(elementId).classList.add('hidden');
}

function showElementById(elementId) {
    document.getElementById(elementId).classList.remove('hidden');
}

function setBackgroundColor(elementId) {
    document.getElementById(elementId).classList.add('bg-orange-400', 'text-black');
}

function removeBackgroundColor(elementId) {
    document.getElementById(elementId).classList.remove('bg-orange-400', 'text-black');
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function getARandomAlphabet() {
    let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    let alphabets = alphabetString.split('');
    let randomIndex = Math.round(Math.random()*25);
    return alphabets[randomIndex];
}
