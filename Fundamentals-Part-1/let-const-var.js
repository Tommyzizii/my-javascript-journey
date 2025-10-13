let age = 20;
console.log(age);
age = 21;
console.log(age);
/* let allows mutable change. */

const birthYear = 2004;
console.log(birthYear);
// birthYear = 2003;
// console.log(birthYear);
// Error -> Uncaught TypeError
/** const doesn't allow mutable change */

var year = 2025;
year = 2026;
console.log(year);
// var is more likely to let.
// var is function scope and let is block scope.

/*
--- Note ---

Use let if it only needs to change, the best way to assign a variable is using const.

*/