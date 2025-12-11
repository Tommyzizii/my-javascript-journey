'use strict';

// Arrow functions do not get 'this' keyword

const calcAge = function(birthYear){
    console.log(2025-birthYear);
    console.log(this);
}

calcAge(2004);

const calcAgeArrow = birthYear => {
    console.log(2025-birthYear);
    console.log(this);
}

calcAgeArrow(2004);

const tommy = {
    year: 2004,
    calAge: function(){
        console.log(this);
        console.log(2025 - this.year);
    },
};
tommy.calAge();


const matilda = {
    year: 2017,
}

matilda.calAge = tommy.calAge // method borrowing
matilda.calAge();

const f = tommy.calAge; // 
f();