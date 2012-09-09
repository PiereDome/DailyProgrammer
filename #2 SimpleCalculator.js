var Calc = (function() {
    return {
        interest: function(type, capital, rate, time) {
            if (type === 'simple') {
                return capital * (1 + (rate * time));
            } else if (type === 'compound') {
                return capital * (Math.pow((1 + rate), time));
            }

        },
        force: function(mass, acc) {
            return mass * acc;
        }
    }
})();

console.log(Calc.interest('compound', 17000,0.07,6.5));