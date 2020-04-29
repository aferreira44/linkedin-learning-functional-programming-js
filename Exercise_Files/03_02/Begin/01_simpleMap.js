// Learning Functional Programming with Javascript
// Chapter 03, Video 02, Exercise 01
var _ = require("lodash");

var cube = (x) => x * x * x;

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numbersCubed = _.map(numbers, (el) => cube(el));

console.log(numbersCubed);
