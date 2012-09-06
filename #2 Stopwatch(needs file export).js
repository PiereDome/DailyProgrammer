//Your mission is to create a stopwatch program. this program should have start, stop, and lap options, and it should write out to a file to be viewed later.


Stopwatch = (function(){
    var time = [];
    start = function() {
        beginTime = Date.now();
    };
    stop = function() {
        endTime = Date.now();
        time.push((endTime - beginTime)/1000+'sec');
        alert(time);
    };
    lap= function() {
        time.push((Date.now()-beginTime)/1000+'sec');
    };
    return this;
})();

Stopwatch.start();
setTimeout('Stopwatch.lap()',1000);
setTimeout('Stopwatch.lap()',2000);
setTimeout('Stopwatch.lap()',3000);

setTimeout('Stopwatch.stop()',4000);