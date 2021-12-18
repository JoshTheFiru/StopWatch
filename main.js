/*First Time Page is Loaded*/
window.onload = function(){
    var seconds = 00;
    var decimals = 00; 
    var btnStart = document.getElementById("start");
    var btnStop = document.getElementById("stop");
    var btnReset = document.getElementById("reset");
    var appendSeconds = document.getElementById("seconds");
    var appendDecs = document.getElementById("decimals");
    var Interval;

    btnStart.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    btnStop.onclick = function(){
        clearInterval(Interval);
    }

    btnReset.onclick = function() {
        clearInterval(Interval);
        decimals = "00"; 
        seconds = "00"; 
        appendSeconds.innerHTML = seconds;
        appendDecs.innerHTML = decimals; 
    }

    function startTimer(){
        decimals++; 
        
        if(decimals <= 9){
            appendDecs.innerHTML = "0" + decimals; 
        }

        if(decimals > 9){
            appendDecs.innerHTML = decimals; 
        }

        if(decimals > 99){
            seconds++; 
            appendSeconds.innerHTML = "0" + seconds;
            decimals = 0; 
            appendDecs.innerHTML = "0" + 0;
        }

        if (seconds > 9){
            appendSeconds.innerHTML = seconds; 
        }
    }

}