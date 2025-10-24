// Function declaration
function calAge1(birthYear){
    const age = 2025 - birthYear;
    return age;
}
const myAge = calAge1(2004);
console.log(myAge);

// Function expression
const calAge2 = function (birthYear){
    const age = 2025 - birthYear
    return age;
} // <- can't call this function without initializations
const age = calAge2(2004);
console.log(age);