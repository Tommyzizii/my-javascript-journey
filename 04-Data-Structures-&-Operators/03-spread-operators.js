// const arr = [7,8,9];
// const badNewArr = [1,2,arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1,2,...arr]; // expend this array
// console.log(newArr);

// console.log(...arr);

"use strict";

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
};

const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu);

const newCategories = [...restaurant.categories, 'Myanmar']
console.log(newCategories)

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 Array
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, string, maps, sets. NOT Objects
const str = 'Tommy';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

const ingredients = [
    prompt(`Lets make pasta! Ingredient 1`), 
    prompt('Ingredient 2'), 
    prompt('Ingredient 3')];

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);
    