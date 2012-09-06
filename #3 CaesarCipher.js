//Welcome to cipher day! write a program that can encrypt texts with an alphabetical caesar  cipher. This cipher can ignore numbers, symbols, and whitespace. for extra credit, add a "decrypt" function to your program!
Cipher = (function() {
    var key = 'abcdefghijklmnopqrstuvwxyz';
    var fixIndex = function(index) {
        if (index <= 26 && index >= 0) {
            return index;
        }
        if (index < 0) {
            return fixIndex(index + 26);
        } else if (index > 26) {
            return index % 26;
        }
    };
    return {
        decrypt: function(input, num) {
            var decrypted = [];
            for (var i = 0; i < input.length; i++) {
                var index = key.indexOf(input[i].toLowerCase());
                if (index !== -1) {
                    index = fixIndex(index - num);
                    decrypted[i] = key[index];
                } else {
                    decrypted[i] = input[i];
                }
            }
            return decrypted.join('');
        },
        encrypt: function(input, num) {
            var encrypted = [];
            for (var i = 0; i < input.length; i++) {
                var index = key.indexOf(input[i].toLowerCase());
                if (index !== -1) {
                    index = fixIndex(index + num);
                    encrypted[i] = key[index];
                } else {
                    encrypted[i] = input[i];
                }
            }
            return encrypted.join('');
        }
    };
})();
alert(Cipher.encrypt('Hello World', 200));
alert(Cipher.decrypt('Hwddg Sgjdv', 200));