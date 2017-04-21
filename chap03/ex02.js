// A function implemented to demonstrate recursion
function isEven(num) {
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    return isEven(num - 2);
  };
};

console.log(isEven(5));
// Returns false

console.log(isEven(6));
// Returns true
