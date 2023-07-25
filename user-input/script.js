// how to accept user input

// EASY WAY with a window prompt 

/* let username = window.prompt("What is your name?");
console.log(username); */

// DIFFICULT WAY WITH HTML textbox

let username; 

document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value; 
    document.getElementById("myLabel").innerHTML = username; 
}