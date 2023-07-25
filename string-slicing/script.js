// slice() extracts a section of a string
//         and returns it as a new string
//         without modifying the orignal string

let fullName;
let firstName;
let lastName;

//firstName = fullName.slice(0, 5);
//lastName = fullName.slice(6);



/*
console.log(firstName);
console.log(lastName);
*/ 

document.getElementById("button").onclick = function(){

    fullName = document.getElementById("fullName").value; 
    firstName = fullName.slice(0, fullName.indexOf(" "));
    lastName = fullName.slice(fullName.indexOf(" ") + 1); 
    document.getElementById("result").innerHTML = "First Name: " + firstName;
    document.getElementById("result2").innerHTML = "Last Name: " + lastName;
    
}


