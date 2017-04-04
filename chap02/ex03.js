// Simple loop that keeps executing while true
var num = 0;
while (num <= 12) {
    console.log(num);
    num = num + 2;
}

// This will give us 2^10
var result = 1, counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024

// The do loop executes at least once before checking if it
// should continue looping.
do {
  var yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

// Very common loop in javascript - for loop
// Prints even numbers from 0 to 12
for (var number = 0; number <= 12; number = number + 2) {
  console.log(number);
}

// Breaks out of the loop when it finds a number greater than or
// equal to twenty that can be divided by 7 evenly.
for (var current = 20; ; current++) {
    if (current % 7 === 0) {
        break;
    }
}
console.log(current);  // Returns 21

/*  Using a switch statement, rather than if statements.
    Notice that "sunny" doesn't have a 'break'.  This means that the
    code will execute until it reaches a break.  In this case, it
    will tell you to "go outside" for both sunny and cloudy weather */

switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
