function calculatePlayers(money,players,ports) {
    players = players||1,ports = ports||1;
    if(money<20){
            return players;
    }else if(money>20&&ports>0){
        ports--;
        players++;
        return calculatePlayers(money-20,players,ports);
    }else if(money>12){
        ports+=3;
        return calculatePlayers(money-12,players,ports);
    }
}

input = prompt('How much money do you have?');
alert(calculatePlayers(input));