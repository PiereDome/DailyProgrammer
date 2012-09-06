//we all know the classic "guessing game" with higher or lower prompts.  lets do a role reversal; you create a program that will guess numbers  between 1-100, and respond appropriately based on whether users say that  the number is too high or too low. Try to make a program that can guess  your number based on user input and great code!

function createGuess(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

function startGame() {
    var low = 1,
        high = 100,
        result = '';
    while (true) {
        guess = createGuess(low, high);
        result = prompt('The computer guessed "' + guess + '" is too high/too low, or just right?').toLowerCase();
        if (result == 'just right') {
            alert('Your number is "'+guess+'"');
            return;
        }
        else if (result == 'too low') {
            low = guess + 1;
        } else if (result == 'too high') {
            high = guess - 1;
        }
    }
}

startGame();