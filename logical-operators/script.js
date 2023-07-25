// gives us the ability to check more than 1 condition concurrently
// && (AND) (both conditions must be true)
// || (OR) (either condition can be true)
// ! (NOT) typically used to reverse a condition's boolean value
// true -> false false -> true 

let temp = 15;
let sunny = false;

/*
 if(temp > 0 && temp < 30){
     console.log("Good weather!");
 }
 else{
     console.log("Bad weather!");
 }
*/

/*
 if(temp <= 0 || temp >= 30){
     console.log("Bad weather!");
 }
 else{
     console.log("Good weather!");
 }
 */

 /*
 if(temp > 0 && temp < 30 && sunny){
     console.log("Good weather!");
 }
 else{
     console.log("Bad weather!");
 }
 */

 if(!(temp > 0)){
     console.log("Cold!");
 }
 else{
     console.log("Warm!");
 }

 if(!sunny){
     console.log("Cloudy!");
 }
 else{
     console.log("Sunny!");
 }