// In this problem you have to read an integer value and calculate the smallest possible number of banknotes in which the value may be decomposed. The possible banknotes are 100, 50, 20, 10, 5, 2 e 1. Print the read value and the list of banknotes.

// Input
// The input file contains an integer value N (0 < N < 1000000).

// Output
// Print the read number and the minimum quantity of each necessary banknotes in Portuguese language, as the given example. Do not forget to print the end of line after each line, otherwise you will receive “Presentation Error”.

// TODO: SOLVE THIS 

const value = 530

const notes = [100, 50, 20, 10, 5, 2]

let remainingValue = value

notes.map((note) => {
    // in the first iteration, count starts with '5' (530 / 100 === 5);
    const count = Math.floor(remainingValue / note)
    // remainingValue starts with 530. 530 - 500 (5 * 100);
    remainingValue = remainingValue - count * note;
    return console.log('count', count);
})