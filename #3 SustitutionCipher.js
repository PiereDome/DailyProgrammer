/*Welcome to cipher day!
  Create a program that can take a piece of text and encrypt it with an  alphabetical substitution cipher. This can ignore white space, numbers,  and symbols.
  for extra credit, make it encrypt whitespace, numbers, and symbols!
  for extra extra credit, decode someone elses cipher!
*/

Cipher = (function() {
    var key = [1, -1, 6, 8, 5, 2, 9, -2, -6, -5, 4, -8, 0, 7, -4, -9, 3, 6, 4, -3, -7, 9, -4, -6, 2, 4, -2, 7, 5, -4, -9, 8, 3, -5, -7, -3, 2, 6, -2, -8, 4, 1, -1, -6, -4]
    index = 'abcdefghijklmnopqrstuvwxyz 1234567890!@#$%^&*()';
    return {
        substitute: function(input) {
            encrypted = [];
            for (i = 0; i < input.length; i++) {
                var newI = index.indexOf(input[i]);
                if (newI === -1) {
                    encrypted.push(input.substr(i, 1));
                } else {
                    encrypted.push(index[newI + key[newI]]);
                }
            }
            return encrypted.join('');
        }
    };
})();

input = prompt('input');
alert(Cipher.substitute(input));