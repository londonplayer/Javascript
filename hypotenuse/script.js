// calculating the hypotenuse

let a;
let b;
let c;

/* 
a = window.prompt("Enter side A:");
a = Number(a);

b = window.prompt("Enter side B:");
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);

console.log("Side C: ", c);
*/

document.getElementById("submit").onclick = function(){

    a = document.getElementById("aText").value;
    a = Number(a);

    b = document.getElementById("bText").value;
    b = Number(b);

    c = Math.pow(a, 2) + Math.pow(b, 2);
    c = Math.sqrt(c);

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}