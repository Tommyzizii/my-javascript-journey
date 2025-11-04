const tommy = {
    firstName: 'Tommy',
    lastName: 'Zizii',
    birthYear: 2004,
    job: 'Student',
    friends: ['No one'],
    hasDriversLicense: true,

    // calcAge: function(birthYear){
    //     return 2025 - birthYear;
    // }

    // calcAge: function(){
    //     return 2025 - this.birthYear;
    // }

    calcAge: function(){
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.age} years old ${this.job}, he has ${this.hasDriversLicense ? 'a' : 'no'} driver license.`;
    } 


};

tommy.calcAge();
console.log(tommy.age);

// Challenge
// 'Tommy is a 21 years old student, he has a driver's license'
console.log(tommy.getSummary());