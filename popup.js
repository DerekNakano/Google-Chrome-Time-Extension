
var btn = document.getElementById("btn");
btn.addEventListener("click", getTime);

//var end = false;




function getTime() {    //updates the time in the text box
    chrome.runtime.sendMessage({call: "Hi"}, function(response) {   //sends message to background that the browser action was clicked
        var time = JSON.stringify(response.tell);
        time = time.substring(1,time.length-1);                     //removes unnecessary parts from message
        document.getElementById("text").innerHTML = time;
    });
}

getTime();      //runs the getTime function in order to display the time when the browser action is clicked
