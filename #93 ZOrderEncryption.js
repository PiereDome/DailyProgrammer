//Z Order Curve
function getSquare(string) {
    var width = 2,
        square = 0,
        length = string.length;
    while (square < length) {
        width += width;
        square = width * width;
    }
    return width;
}

function zOrder(pos, width) {
    var FLAG_A = 0x1,
        // 0001
        FLAG_B = 0x2,
        // 0010
        count = 1,
        x = 0,
        y = 0;
    while (pos > 0) {
        if (pos & FLAG_A) {
            x += count;
        }
        if (pos & FLAG_B) {
            y += count;
        }
        pos = pos >> 2;
        count += count;
    }
    var newPos = y * width + x;
    return newPos;
}

function decrypt() {
    var input = prompt('Please inupt your string to decrypt');
    var width = getSquare(input),
        output = [],
        square = width * width;
    for (i = 0; i < square; i++) {
        var newI = zOrder(i, width);
        output[i] = input.substr(newI, 1);;
    }
    return output.join('');
}

function encrypt() {
    var input = prompt('Please input your string to encrypt');
    var output = [];
    var width = getSquare(input);
    var square = width * width;
    for (i = 0; i < square; i++) {
        var newI = zOrder(i, width);
        var letter = input.substr(i, 1);
        output[newI] = (letter) ? letter : ' ';
    }
    return output.join('');
}

alert(encrypt());
alert(decrypt());