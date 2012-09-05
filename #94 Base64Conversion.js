//Base64 encoder/decoder
var indexTable = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
var bitPattern = '',
    count = 0,
    base64 = '';
//length = input.length + (input.length + 1) % 3;

function getBinary(char) {
    if (char.charCodeAt(0)) {
        temp = char.charCodeAt(0).toString(2);
        while (temp.length < 8) {
            temp = 0 + temp;
        }
    }
    return temp;
}

function encode(input) {
    var output = '';
    for (var i = 0; i < input.length; i++) {
        bitPattern += getBinary(input.substr(i, 1), 8);
    }
    for (var i = 0; i < bitPattern.length; i += 6) {
        var bit = bitPattern.substr(i, 6);
        while (bit.length < 6) {
            bit += '00';
        }
        var index = (parseInt(bit, 2));
        output += indexTable[index];
    }
    while (output.length % 4) {
        output += '=';
    }
    return output;
}

function decode(input) {
    var output = '',
        bitPattern = '';
    for (var i = 0; i < input.length; i++) {
        var index = indexTable.indexOf(input.substr(i, 1));
        if(index === -1){
         index = 0;
        }
        var temp = index.toString(2);
        while (temp.length < 6) {
            temp = 0 + temp;
        }
        bitPattern += temp;
    }
    for (var i = 0; i < bitPattern.length; i += 8) {
        var bit = bitPattern.substr(i,8);
        while(bit.length<8){
             bit += 0;   
        }
        output += (String.fromCharCode(parseInt(bit,2)));
    }
    return output;
}
var input = prompt('Please input string to encode');
alert(encode(input));
var input = prompt('Please input string to decode');
alert(decode(input));