//create a program that will allow you to enter events organizable by hour. There must be menu options of some form, and you must be able to easily edit, add, and delete events without directly changing the source code.
Event = function(name, time) {
    var eventName = name,
        eventTime = time;
    this.getInfo = function(){
        return {  name:eventName,time:eventTime};
    };
    this.changeName = function(name){
      eventName =   name;
    };
    this.changeTime = function(time){
        eventTime = time;
    };
};

Calander = function(){
    var eventsList= [];
    this.editEvent= function() {
        var event = prompt('What event would you like to delete?');
        for(i=0;i<eventsList.length;i++){
            if(eventsList[i].getInfo().name === event){
                eventsList[i].changeName(prompt('Please rename the event?'));
                eventsList[i].changeTime(prompt('Please set the time'));
                return;
            }
        }v
    };
    this.addEvent= function() {
        var time = prompt('Please input the event time');
        var name = prompt('Please input the event name');
        eventsList.push(new Event(name,time));
    };
    this.deleteEvent= function() {
        var event = prompt('What event would you like to delete?');
        for(i=0;i<eventsList.length;i++){
            if(eventsList[i].getInfo().name === event){
                eventsList.splice(i,1);
                return;
            }
        }
    };
    this.showEvents= function(){
        for(i=0;i<eventsList.length;i++){
           event = eventsList[i].getInfo();
            console.log('Event: '+event.name+', Time: '+event.time);
        }
    }
};

calander = new Calander();
calander.addEvent();
calander.showEvents();
calander.editEvent();
calander.showEvents();