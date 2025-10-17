// == -> Loose Equality
// === -> Strict Equality (Default / Prevent Automatic Coercion)

const age = 18;

if (age === 18) console.log('age === 18 -> strict equality printed');
if(age == 18) console.log('age == -> loose equality printed');

/*

18 == 18 -> True
18 === 18 -> True

=== does not perform concercion
'18' == 18 -> True
'18' === 18 -> False

18 == 19 -> False
18 === 19 -> False

*/

const favorite = Number(prompt("What is your favorite number: "));
console.log(`Your favorite number is ` + favorite);
console.log(`Type of your favorite number` + typeof favorite);

if (favorite === 21){ // Only if 21 is not a string and is a number
    console.log(`21 printed.`);
}else if(favorite === 17){
    console.log("17 is printed.")
}else{
    console.log("21 or 17 is not your favorite number");
}

if(favorite !== 21){
    console.log("not 21 in strict equality");
}