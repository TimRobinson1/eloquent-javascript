// Exercise from Chapter 2 - prints a chessboard of hashes.
function isOdd(num) {
  return (num % 2 === 0);
}

function Chessboard(number) {
  var first = "#";
  var second = " ";
  for (var x = 0; x < number; x++) {
    var string = "";
    for (var i = 0; i < number; i++) {
      if (isOdd(i)) { string += first }
      else { string += second };
    };
    first = [second, second = first][0];
    console.log(string);
  };
};

Chessboard(9);
