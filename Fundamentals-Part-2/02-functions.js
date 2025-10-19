'use strict'

function logger(){
    console.log('My name is Tommy');
}

// Calling/ Running/ Invoking function
logger();
logger();

function factorial(n){
    let result = 1;
    if(n <= 1){
        result = result * 1;
    }else{
        result = n * factorial(n-1);
    }
    return result;
}

console.log(factorial(10));