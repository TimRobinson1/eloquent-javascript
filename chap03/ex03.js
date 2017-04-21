function countBs(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
  if (str.charAt(i)) { count++ };
  };
  console.log(count);
};

countBs('Battle Bus')
// returns 2
