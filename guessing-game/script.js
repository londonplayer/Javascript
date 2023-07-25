



const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("button").onclick = function() {

    let guess = document.getElementById("guess").value;
    guesses++;

    if(guess == answer){
        alert(`Nice! ${answer} is the number. It took you ${guesses} guesses!`);
    }
    else if(guess < answer){
        alert(`Too small!`);
    }
    else{
        alert(`Too large!`);
    }
}