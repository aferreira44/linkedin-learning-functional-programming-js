// Learning Functional Programming with Javascript
// Chapter 03, Video 03, Exercise 01
const _ = require("lodash");

const isEven = (x) => x % 2 === 0;

const numbers = [1, 2, 3, 4, 5];
const evensFromNumbers = _.filter(numbers, (el) => isEven(el));

console.log(evensFromNumbers);
