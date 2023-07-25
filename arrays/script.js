// array = think of it as a variable
//         that can store multiple values 

let fruits = ["apple", "orange", "banana"];

//fruits[2] = "coconut"; - changes the element (banana to coconut)

fruits.push("lemon");       //add an element
fruits.pop();               //removes last element
fruits.unshift("mango");    // add element to beginning
fruits.shift();             //removes element from beginning

let length = length.length;
let index = fruits.indexOf("kiwi");

console.log(index);

fruits.map((i) => {
    console.log(i)
})