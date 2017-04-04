// Working with variables
// Semi-colons are important in javascript for terminating
// some lines of code.

var multiple = 5 * 5;  // 25

var ten = 10;
console.log(ten * multiple);  // 250

// Once assigned a name, variables can be reassigned without 'var'
var mood = "light";
console.log(mood);
mood = "dark";
console.log(mood);

// Variables can be subracted or altered from their previous value
var debt = 130;
debt = debt - 30;  // £30 of debt paid off current debt value
console.log("£" + debt);

// Variables can be assigned with a single var
var one = 1, two = 2;
console.log(one + two);  // Returns 3
