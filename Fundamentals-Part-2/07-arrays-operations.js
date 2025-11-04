const friends = ['Michael', 'Steven', 'Peter'];

// Add Elements
friends.push('Tommy');
console.log(friends);

const newLength = friends.push('T');
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove Elements
friends.pop();
console.log(friends);

const pop = friends.pop();
console.log(pop);
console.log(friends);

friends.shift(); // First Element Remove
console.log(friends);

console.log(friends.indexOf('Peter'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Peter'));
console.log(friends.includes(23));