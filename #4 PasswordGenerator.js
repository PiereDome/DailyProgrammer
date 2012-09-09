//You're challenge for today is to create a random password generator!
//For extra credit, allow the user to specify the amount of passwords to generate.
//For even more extra credit, allow the user to specify the length of the strings he wants to generate!

Password = (function(){
    generatePassword = function(length){
        var len = length || 8,
        password ='';
        for(var i=0;i<len;i++){
            var ascii = (Math.floor(Math.random()*78)+48);
            password += String.fromCharCode(ascii);
        }
        return password;
    };
    return {
        generate: function(amount, length){
            var passwords = [];
            for(var i=0;i<amount;i++){
                passwords.push(generatePassword(length));
            }
            return passwords;
        }
    };
})();
    
console.log(Password.generate(3,10));