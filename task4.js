/*
Checking if it's an Array
Instructions:
- Create different variables, each containing either an array or a non-array value.
- Now use isArray to check if each variable is an array.
- Print a message to the console indicating whether each variable is an array or not.
*/

let variable1 = [1, 2, 3, 4, 5];
let variable2 = "This is a string";
let variable3 = { name: "John", age: 30 };  
let variable4 = true;

console.log(Array.isArray(variable1) ? "variable1 is an array." : "variable1 is not an array."); 
console.log(Array.isArray(variable2) ? "variable2 is an array." : "variable2 is not an array.")