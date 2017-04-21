function countBs(str, letter) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
  if (str.charAt(i) === letter) { count++ };
  };
  console.log(count);
};

countBs('Beetle', 'e')
// returns 3
