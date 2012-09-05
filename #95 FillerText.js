//Filler Text
firstLetterFreq = {
    a: 11.602,
    b: 4.702,
    c: 3.511,
    d: 2.670,
    e: 2.007,
    f: 3.779,
    g: 1.950,
    h: 7.232,
    i: 6.286,
    j: 0.597,
    k: 0.590,
    l: 2.705,
    m: 4.374,
    n: 2.365,
    o: 6.264,
    p: 2.545,
    q: 0.173,
    r: 1.653,
    s: 7.755,
    t: 16.671,
    u: 1.487,
    v: 0.649,
    w: 6.753,
    x: 0.037,
    y: 1.620,
    z: 0.034
};
laterLetterFreq = {
    a: 8.167,
    b: 1.492,
    c: 2.782,
    d: 4.253,
    e: 12.702,
    f: 2.228,
    g: 2.015,
    h: 6.094,
    i: 6.966,
    j: 0.153,
    k: 0.747,
    l: 4.025,
    m: 2.406,
    n: 6.749,
    o: 7.507,
    p: 1.929,
    q: 0.095,
    r: 5.987,
    s: 6.327,
    t: 9.056,
    u: 2.758,
    v: 1.037,
    w: 2.365,
    x: 0.150,
    y: 1.974,
    z: 0.074
};

function createLetter(word) {
    var randNum = (Math.random() * 100);
    if (word.length < 1) {
        letterFreq = firstLetterFreq;
    } else {
        letterFreq = laterLetterFreq;
    }
    for (key in letterFreq) {
        if (randNum < letterFreq[key]) {
            letter = key;
            break;
        } else {
            randNum -= letterFreq[key];
        }
    }
    return letter;
}

function capitalize(word) {
    word = word.substr(0, 1).toUpperCase() + word.substr(1);
    return word;
}

function createWord(length) {
    var word = '';
    var chanceOfNum = Math.random();
    if (chanceOfNum < 0.05) {
        word = Math.floor(Math.random() * 10);
    } else {
        while (word.length < length) {
            word += createLetter(word);
        }
    }
    return word;
}



function getPunctuation() {
    var randNum = Math.random();
    if (randNum < 0.65) {
        return '. ';
    } else if (randNum < 0.80) {
        return ', ';
    } else if (randNum < 0.90) {
        return '! ';
    } else {
        return '? ';
    }
}

function createSentence(length) {
    var sentence = [];
    while (sentence.length < length) {
        var wordLength = Math.floor(Math.random() * 12) + 1;
        var word = createWord(wordLength);
        if (sentence.length === 0 && typeof word === 'String') {
            word = capitalize(word);
        }
        sentence.push(word);
    }
    var punctuation = getPunctuation();
    return sentence.join(' ') + punctuation;
}

function createFiller(wordCount) {
    var filler = '';
    while (wordCount > 0) {
        var sentenceLength = Math.floor(Math.random() * 5) + 3;
        sentenceLength = wordCount < sentenceLength?wordCount:sentenceLength;
        filler += createSentence(sentenceLength);
        var randNum = Math.random();
        if (randNum < 0.35) {
            filler += '\n';
        } else if (randNum < 0.5) {
            filler += '\n\n';
        }
        wordCount -= sentenceLength;
    }
    return filler;
}

input = prompt('How many words would you like?');
alert(createFiller(input));