const age = Number(prompt("How old are you:"));
age >= 18 ? console.log('Lets go clubbing') : console.log('Just Study');
// condition ? if -> : else -> ;

const drink = age >= 18 ? 'Wine' : 'Water';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`);