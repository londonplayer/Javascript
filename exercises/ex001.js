// write a function that takes an array of integers and returns the sum
// of all the even numbers in the array.

// declaring a simple variable that contains an array of integers
const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function evenSum(arr) {
    // variable must be initialized before the loop
    let result = 0;
    for(i = 0; i < arr.length; i++) {
        // if the index of the array (that is the input parameter) is even
        if(arr[i] % 2 == 0) {
            // we add the index to the variable called result
            result += arr[i];
        // if there is a return statement inside of a loop, the code will 
        // return after the frist iteration, regardless of the if/else condition
        }
    }
    // return the variable that, now, contains all even numbers from a array summed
    return result;
}

evenSum(numList)


// write a function that takees in a string and returns the string with all vowels removed

// declaring a simple string variable
const name = 'pedro alvares cabral';

function removeVowels(word) {
    // initializing the variable
    let result = '';
    // using the method split() to transform the string into an array, where every character
    // turns into an element
    let split = word.split('')
    for(i = 0; i < split.length; i++) {
        // condition to check if any of the indexes of the array are vowels
        if(split[i] !== 'a' &&
            split[i] !== 'e' &&
            split[i] !== 'i' &&
            split[i] !== 'o' &&
            split[i] !== 'u') {
            // adding the index of split to the result variable
            result += split[i]
        }
    }
    // returns the 'word' without the vowels
    return result;
}

removeVowels(name)
