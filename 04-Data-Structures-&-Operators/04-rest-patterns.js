'use strict';

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order Received! ${this.starterMenu[starterIndex]} 
        and ${this.mainMenu[mainIndex]} 
        will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3){
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIng, ...othersIng){
    console.log(mainIng);
    console.log(othersIng);
  }
};

// 1.) Destructuring

const arr = [1,2,...[3,4]]; //use spread syntax

const [a,b,...others] = [1,2,3,4,5]; //This is rest becuase the left side of =
console.log(a,b,others);


const [pizza, ,risotto, ...otherfood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherfood);

// Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// 2.) functions

const add = function(...numbers) {
    console.log(numbers);
    let sum = 0;
    for (let i = 0;i<numbers.length;i++){
        sum += numbers[i];
    }
    console.log(sum);
}

add(2,3);
add(5,4,3,2);
add(1,2,3,4,5,6,7)

const x = [23,5,7];
add(...x); // Spread


restaurant.orderPizza('Mushroom','Cheese','Sausage');
restaurant.orderPizza('Mushroom'); // An empty array for none inputs into a function

// Notes spreading is an array to single and rest is combine into an array

