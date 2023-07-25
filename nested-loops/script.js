// nested loop = a loop inside of another loop

let symbol = window.prompt("Enter a symbol");
let rows = window.prompt("Enter a number of rows");
let columns = window.prompt("Enter a number of columns");

for(let i = 1; i <= rows; i++){
    for(let j = 1; j <= columns; j++){
        document.getElementById("rectangle").innerHTML += symbol; 
    }
    document.getElementById("rectangle").innerHTML += "<br>";
} 

// "+=" will print the numbers side by side. ex.: everytime the line is executed, it will print the first number + the second + the third and so on. in case "+=" is not used and we just use "=", only the first number will appear, because the command is to print only the given number. 