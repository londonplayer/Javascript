// return = returns a value back to the place
//          where you invoked a function

let area;
let width;
let height;

width = window.prompt("Enter width:");
height = window.prompt("Enter height:");

area = getArea();

console.log("The are is: ", area);

function getArea() {
    let result = width * height;
    return result;
}