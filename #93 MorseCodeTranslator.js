MorseCodeKey = {
    'a': '.-','b': '-...','c': '-.-.','d': '-..','e': '.',
    'f': '..-.','g': '--.','h': '....','i': '..','j': '.---',
    'k': '-.-','l': '.-..','m': '--','n': '-.','o': '---',
    'p': '.--.','q': '--.-','r': '.-.','s': '...','t': '-',
    'u': '..-','v': '...-','w': '.--','x': '-..-','y': '-.--',
    'z': '--..',1: '.----',2: '..---',3: '...--',4: '....-',
    5: '.....',6: '-....',7: '--...',8: '---..',9: '----.',
    0: '-----',',': '--..--','.': '.-.-.-','?': '..--..',
    '/': '-..-.','-': '-....-'
};

function getMorseCode(letter) {
    key = letter.toLowerCase();
    return MorseCodeKey[key];
}

function getAscii(code) {
    for (x in MorseCodeKey) {
        if (MorseCodeKey[x] == code) {
            return x;
        }
    }
    return '';
}

var input = prompt('Please input message');
var output = '';
if (input.test(/[a-zA-Z]/)) {
    var words = input.split(' ');
    for (i = 0; i < words.length; i++) {
        for (j = 0; j < words[i].length; j++) {
            output += getMorseCode(words[i].substr(j, 1)) + ' ';
        }
        output += ' ';
    }
} else {
    var words = input.split('  ');
    for (i = 0; i < words.length; i++) {
        var letters = words[i].split(' ');
        for (j = 0; j < letters.length; j++) {
            output += getAscii(letters[j]);
        }
        output += ' ';
    }
}

alert('The translation is: ' + output);