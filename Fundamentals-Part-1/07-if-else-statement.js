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

