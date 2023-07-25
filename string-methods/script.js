// useful strong properties & methods

let userName = "Vitor Gerhardt";
let phoneNumber = "123-456-7890";

console.log(userName.length);                       // display string length
console.log(userName.charAt(0));                    // locates an specific character by index number
console.log(userName.indexOf("o"));                 // locates an specific character by letter
console.log(userName.lastIndexOf("t"));             // display the last character
userName = userName.trim();                         // removes all spaces from front and end
userName = userName.toUpperCase();                  // throws everything to uppercases
userName = userName.toLowerCase();                  // throws everything to lowcases

phoneNumber = phoneNumber.replaceAll("-", ".");     // replaces every character for another (two parameters)

console.log(phoneNumber);



