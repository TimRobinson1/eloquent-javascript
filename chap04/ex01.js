// Experimenting with basic javascript array methods
var arr = [];
arr.push("Mack");
arr.push("the", "Knife");
console.log(arr);
// → ["Mack", "the", "Knife"]
console.log(arr.join(" "));
// → Mack the Knife
console.log(arr.pop());
// → Knife
console.log(arr);
// → ["Mack", "the"]
var index = arr.indexOf('the');
arr.splice(index, 1);
console.log(arr);
// → ["Mack"]
