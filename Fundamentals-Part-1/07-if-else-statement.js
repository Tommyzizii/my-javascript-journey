// Driving Policy

const age = 21;
const legalAge = 18

if (age < legalAge){
    console.log(`You are too young to drive! 🤚🏻`);
} else if(age >= 70){
    console.log(`You are too old to drive! 🧘🏻`);
} else if(age >= legalAge){
    console.log(`Your are allowed to drive! 🚘`);
} else {
    console.log(`Illegal To Drive!`);
}

// Century Calculate

const birthYear = 2004;
let century;

if (birthYear <= 2000){
    century = 20;
    console.log(`Your are born in ${century}th century.`);
}else{
    century = 21;
    console.log(`Your are born in ${century}st century.`);
}

