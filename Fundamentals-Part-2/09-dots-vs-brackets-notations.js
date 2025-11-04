const tommy = {
    firstName: 'tommy',
    lastName: 'Zizii',
    age: 2025 - 2004,
    job: 'Student',
    friends: ['No one']
}

console.log(tommy);

console.log(tommy.lastName); // <= dot
console.log(tommy['firstName']); // <= bracket

const nameKey = 'Name';
console.log(tommy['first' + nameKey]);

const interestedIn = prompt(`What do you want to know about me? Choose between firstName, lastName, age, jon and friends`);
console.log(tommy[interestedIn]);

if(tommy[interestedIn]){
    console.log(tommy[interestedIn]);
}else{
    console.log('Wrong Request! Choose between firstName, lastName, age, jon and friends');
}

tommy.location = 'Bangkok';
tommy['github'] = '@tommyzizii';
console.log(tommy);

// Challenge
// 'Tommy has 1 friend(s), and his best frined is called No one'

console.log(`${tommy.firstName} has ${tommy.friends.length} friend(s), and his best friend is called ${tommy.friends}`);