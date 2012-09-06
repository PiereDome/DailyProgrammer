Calc = {
    interest: function(type,capital,rate,time) {
        this.simple = function(args){
         return args[1] * (1 + (args[2]* args[3]));   
        };
        this.compound = function(args){
            return args[1] * (Math.pow((1 + args[2]),args[3]));
        };
        return this[type](arguments);
    },
    force: function(mass,acceleration){
        return mass*acceleration;
    }
};

alert(Calc.interest('compound',17000,.07,6));