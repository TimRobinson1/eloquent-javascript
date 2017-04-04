// Working with functions

// Sends a browser notification.
alert("Hello world!");

// We've been using the console.log function so far.
// This function outputs to the browser's JavaScript console.
var x = 30;
console.log("the value of x is", x);
// Returns 'the value of x is 30'

// Mathematic functions:
console.log(Math.min(4, 2)); // Returns the smaller value: 2

console.log(Math.max(6, 3) + 100); // Returns largest value + 100: 106

// Similar to the alert function, but provides the user a choice
// Returns a boolean value corresponding with the user's choice.
confirm("Shall we, then?");

// Asks the user for input and returns it as a string.
prompt("Type your secrets here", "...");

var num = Number(prompt("Pick a number", ""));
alert("Your number is the square root of " + num * num);
// Number converts the prompt (which returns a string) to a number.
// String and Boolean functions also exist.

// Variation on the above - an if statement that checks if it's a
// valid number before printing the answer.
var num = Number(prompt("Pick a number", ""));
if (!isNaN(num)) {
    alert("Your number is the square root of " + num * num);
} else {
    alert("That's not a number");
}

// This example uses an 'else if' statement.
var num = Number(prompt("Pick a number", "0"));
if (num < 10) {
  alert("Small");
} else if (num < 100) {
  alert("Medium");
} else {
  alert("Large");
}
