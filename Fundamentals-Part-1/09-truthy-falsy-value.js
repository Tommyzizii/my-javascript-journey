// Falsy Values: 0, '', Undefined, null, Nan,
// Any others are Truthy Values.

console.log(Boolean(0));
console.log(Boolean(''));

console.log(Boolean(1));
console.log(Boolean('Tommy'));

let age;
if (age){
    console.log('Age is defined');
}
else{
    console.log('Age is undefined');
}