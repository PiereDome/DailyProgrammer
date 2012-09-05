//Vigenere Cipher
var letters = 'abcdefghijklmnopqrstuvwxyz';

function encode() {
    var message = prompt('Input your string'),
        key = prompt('Input your key'),
        cipher = '';
    while (key.length < message.length) {
        key += key;
    }
    //console.log(key);
    for (i = 0; i < message.length; i++) {
        messageLetter = getLetter(message, i);
        messageIndex = getIndex(messageLetter);
        keyLetter = getLetter(key, i);
        keyIndex = getIndex(keyLetter);
        newIndex = messageIndex + keyIndex;
        newIndex = newIndex > 25 ? newIndex - 26 : newIndex;
        cipher += letters[newIndex];
    }
    return cipher;
};

function getLetter(string, index) {
    return string.substr(index, 1).toLowerCase();
}

function getIndex(letter) {
    return letters.indexOf(letter);
}

function decode() {
    var cipher = prompt('Input the cipher'),
        key = prompt('Input your key'),
        message = '';
    while (key.length < cipher.length) {
        key += key;
    }
    for (i = 0; i < cipher.length; i++) {
        cipherLetter = getLetter(cipher, i);
        cipherIndex = getIndex(cipherLetter);
        keyLetter = getLetter(key, i);
        keyIndex = getIndex(keyLetter);
        newIndex = cipherIndex - keyIndex;
        newIndex = newIndex < 0 ? newIndex + 26 : newIndex;
        message += letters[newIndex];
    }
    return message;
}

alert(encode());
alert(decode());