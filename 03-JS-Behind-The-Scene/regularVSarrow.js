"use strict";

var firstName = "tommyzizii"; // becomes global variable
 
const tommy = {
  firstName: "Tommy",
  year: 2004,
  calAge: function () {
    //console.log(this);
    console.log(2025 - this.year);
    
    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   if (sel  f.year >= 1981 && self.year <= 1996) {
    //     console.log("You are Millenial");
    //   } else {
    //     console.log('You are GenZ');
    //   }
    // };
    // isMillenial();


    // Solution 2
    //const self = this; No need
    const isMillenial = () => {
      console.log(this);
      if (this.year >= 1981 && this.year <= 1996) {
        console.log("You are Millenial");
      } else {
        console.log('You are GenZ');
      }
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`), // Arrow function took the window object

  greetReg: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

tommy.greet();
tommy.greetReg();
tommy.calAge();

const addExp = function(a,b){
    console.log(arguments);
    return a+b;
}

addExp(1,2);
addExp(1,2,3,4);

var addArrow = (a,b) => {
    
    console.log(arguments);
    return a + b

};

addArrow(1,2);