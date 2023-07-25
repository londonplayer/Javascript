// const = a variable that can't be changed

const PI = 3.14159;
let radius; 
let circunference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circunference = 2 * PI * radius;

console.log("The circunference is: ", circunference);