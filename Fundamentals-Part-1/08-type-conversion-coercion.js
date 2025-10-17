// Type Conversion
// Manually change the type

const birthYear = "2004";

console.log(`Numebr -> ${Number(birthYear)} , String -> ${birthYear}`);

// String Concatenation
console.log(birthYear + 21);

// Number Operation
console.log(Number(birthYear) + 21);

console.log(Number('Tommy')); // Output -> NaN (Not a number)
console.log(typeof NaN);

console.log(String(21));

// Type Coercion
// Javascipt automatically change the type

console.log("I'm " + 21 + " years old.");

console.log('This is the type concercion example:');
console.log('21' - '5' - 3);
console.log('21' + '5' + 3);
console.log('21' * '3');
