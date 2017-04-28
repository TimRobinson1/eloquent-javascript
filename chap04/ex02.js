// Experimenting with objects
var day = {
  weather: 'cloudy',
  events: ["work", "running", "meeting",
           "television"]
};
console.log(day1.weather);
// → 'cloudy'
console.log(day1.schedule);
// → undefined
day1.schedule = 'Nothing on today!';
console.log(day1.schedule);
// → 'Noting on today!'


var someObject = {left: 1, right: 2};
console.log(someObject.left);
// → 1
delete someObject.left;
console.log(someObject.left);
// → undefined
console.log("left" in someObject);
// → false
console.log("right" in someObject);
// → true
