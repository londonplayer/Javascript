// a variable is a container for storing data;
// a variable behaves as it was the value that it contains;

// two steps:
// declaration (var, let, const)
// assignment  (= assignment operator)

let firstName = "Vitor"; //strings
let age = 21; // numbers
let student = true; // booleans

console.log("Hello ", firstName);
console.log("You are ", age, " years old");
console.log("enrolled: ", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;