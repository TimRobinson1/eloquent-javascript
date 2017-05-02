// Exercise producing an array of a range
function sumRange(start, end, step) {
  if (step == null) {
    step = 1;
  };
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  };
  return array;
};

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++);
    total += array[i];
  return total;
};

console.log(sumRange(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sumRange(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(sumRange(1, 10)));
// → 55
