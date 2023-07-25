// function = define code once, and use it many times
//            to perform some code, call the function name

// variables outside of a function have a global scope

startProgram();

function startProgram(){
    let userName = "Vitor";
    let age = 21;

    happyBirthday(userName, age);
}

function happyBirthday(a, b){              // parameters don't have to be the same in both functions 
    console.log("Happy birthday to you!"); // they just need to be in the correct order
    console.log("Happy birthday to you!");
    console.log("Happy dear ", a);
    console.log("Happy birthday to you!");
    console.log("You are ", b, "years old!");
}
