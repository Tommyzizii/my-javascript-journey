const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = [friend1, friend2, friend3];

console.log(friends);

const years = new Array(2020, 2021, 2022);
console.log(years);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Tommy';
console.log(friends);

// Not do => friends ['Bob', 'Alice];

const Tommy = ['Tommy', 'Zizii', 2025 - 2004];
console.log(Tommy);

// Exercise 
const calcAge = function(birthYear){
    return 2021 - birthYear;
}

const birthYear = [1990, 1967, 2002, 2010, 2021];

console.log(calcAge(birthYear[1]));
const age = [calcAge(birthYear[0]), calcAge(birthYear[1])];
console.log(age);