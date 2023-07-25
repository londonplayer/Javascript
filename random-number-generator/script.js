// generates a random number with Math library

let x;
let y;
let z;

/*
console.log(x);
console.log(y);
console.log(z);
*/

document.getElementById("roll").onclick = function(){

    x = Math.floor(Math.random() * 6) + 1; // choose a number between 0 and 5
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;
    
    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;

}
