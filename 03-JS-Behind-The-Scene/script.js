'use strict';

// Scope chains practice
function calcAge(birthYear){
    const age = 2025 - birthYear;
    
    function printAge(){
        const output =  `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996){
            const firstName = 'Thant'; // Different scope
            const str = `You are millenial`;
            console.log(str);
        }else{
            const str1 = `You are not millenial`;
            console.log(str1);
        }
    }

    printAge();
    return age;

}

const firstName = 'Tommy';
calcAge(2004);

// TDZ in practice
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Tommy';
// let job = 'student';
// const year = 2004;

// Functions in TDZ

// console.log(addDec(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

// function addDec(a,b){
//     return a + b;
// } // can call before declaration

// const addExpr = function (a,b){
//     return a +b;
// } 

// const addArrow = (a,b) => a + b;

// Example


var numPro = 0;

if(numPro <= 0){
    deleteShoppingCart();
}


function deleteShoppingCart(){
    console.log('All Deleted');
}