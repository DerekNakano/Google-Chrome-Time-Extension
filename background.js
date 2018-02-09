
var sec = 0;
var min = 0;
var hours = 0;

function sleep(ms) {    //sleep function
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function countClock() {       //runs the clock asynchronously to ensure it will keep running to get an accurate reading of time passed

    while (1) {

        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;

            if (min >= 60) {
                min = 0;
                hours++;
            }
        }

        await sleep(1000);

    }
}

chrome.runtime.onMessage.addListener(   //listens for a popup to send a message and responds with the time
    function(request, sender, sendResponse) {
        sendResponse({tell: hours + " hours " + min + " minutes " + sec + " seconds"});
    }    
);


countClock();       //function that runs the clock
