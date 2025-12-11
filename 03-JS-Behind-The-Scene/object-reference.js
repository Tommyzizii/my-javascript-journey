'use strict';

const jessica1 = {
    firstName: 'Jessica',
    lastName: 'William',
    age: 27,

};

function marryPerson(originalPerson, newLastName){
    originalPerson.lastName = newLastName;
    return originalPerson;
}

const marriedJessica = marryPerson(jessica1, 'Davis')

// const marriedJessica = jessica; 
// marriedJessica.lastName = 'Davis';

console.log('Before', jessica1);
console.log('After', marriedJessica);


const jessica = {
    firstName: 'Jessica',
    lastName: 'William',
    age: 27,
    family: ['Alice', 'Bob'],
};

const jessicaCopy = {...jessica}; // Shallow Copy
jessicaCopy.lastName = 'Davis'

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

console.log('Before', jessica);
console.log('After', jessicaCopy);

// Deep Copy or Deep Clone

const jessicaClone = structuredClone(jessica); // Car car = new car();

jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('Before Clone', jessica);
console.log('After Clone', jessicaClone);


