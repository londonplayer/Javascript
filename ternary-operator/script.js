// ternary operator = shortcut for an 'if/else' statement
//                     takes 3 operands

//                     1. a condition with ?
//                     2. expression if true :
//                     3. expression if false

// condition ? expIfTrue : exprIfFalse

checkWinner(false);

function checkWinner(win){
    win ? console.log("YOU WIN!") : console.log("YOU LOSE!");
}