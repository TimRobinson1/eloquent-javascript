// Javascript attempts to accomodate by performing automatic type
// conversions if passed in the wrong types:

console.log(8 * null);
// Produces '0', null is automatically converted into 0
console.log("5" - 1);
// Produces 4, the string is converting into an integer
console.log("5" + 1);
// Produces 51, string is concatenated as string "51" rather
// than adding 5 to 1.
console.log("five" * 2);
// This produces NaN, and any further operations on NaN
// continue to produce NaN.
console.log(false == 0);
// Produces true, javascript attempts to convert one type to the
// other when presented with a comparison operator.

// For the most part, null and undefined are the same thing.
console.log(null == undefined);
// Produces true
console.log(null == 0);  // False
// When null or undefined occurs on only one side of the operator,
// it will always produce false.

// Using three equals such as '===' or '!==' ensures that
// no automatic conversion takes place.
console.log(null === undefined);
// Unlike previously, this produces false.

// The || operator will return the value to its left when that can be
// converted to true and will return the value on its right otherwise.
console.log(null || "user")
// Returns "user"
console.log("Tim" || "user")
// Returns "Tim"
