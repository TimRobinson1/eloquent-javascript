// Console logs can also evaluate statements
// and return boolean values.

// ==  -  This is used for checking if one equals the other.
// !=  -  For checking if one does NOT equal the other.
// <=  -  Less than or equal to (less than without the equals)
// >=  -  Greater than or equal to (greater than without the equals)

console.log("Itchy" == "Scratchy");
// This returns false.

console.log(3 > 1);
// This returns true.

console.log( 8 + 10 != "cats" );
// This returns true.

// There's one value in Javascript that doesn't equal itself, and
// that is NaN, which stands for "not a number".  It denotes a
// nonsensical computation, and as such doesn't equal anything.

console.log(NaN == NaN);
// This returns false.

// Logical operators:
// ||  -  An 'or' operator.
// &&  -  An 'and' operator.
//  !  -  A 'not' operator.

console.log(true || false);
// Produces true. 'Or' operator passes true as long as at least
// one is true.

console.log(false && false);
// Produces false. 'And' operator takes both statements and needs
// both to be true to return true.

console.log(!false);
// This returns true, as the 'not' operator has reversed the
// boolean value.

// An conditional operator.
console.log(true ? 1 : 2);
// Returns 1, if the condition is true, such as this case.

console.log(false ? 1 : 2);
// Returns 2.

console.log(1 + 1 == 2 ? "This is true" : "This is false")
// Returns 'This is true'
