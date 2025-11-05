const tommy = [
    'Tommy',
    'Zizii',
    2025-2004,
    'Student',
    ['No one']

];

for(let i = 0; i < tommy.length ;i++){
    console.log(tommy[i],  typeof tommy[i]);
}
///////////////////////////////////////////
const typeTommy = [];
for(let i = 0; i < tommy.length ;i++){
    //typeTommy[i] = typeof tommy[i];
    typeTommy.push(typeof tommy[i]);
}
console.log(typeTommy);
///////////////////////////////////////////
const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i ++){
    ages[i] = 2025 - years[i];
}
console.log(ages);

// Continue and break
console.log(`-------Only String-------`);
for(let i = 0; i < tommy.length ;i++){
    if (typeof tommy[i] != 'string') continue;
    console.log(tommy[i],  typeof tommy[i]);
}

console.log(`-------BREAK WITH NUMBER-------`);
for(let i = 0; i < tommy.length ;i++){
    if (typeof tommy[i] != "string") break;
    console.log(tommy[i],  typeof tommy[i]);
}