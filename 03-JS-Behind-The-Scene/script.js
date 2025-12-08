'use strict';

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


