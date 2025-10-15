const firstName = 'Tommy';
const job = 'Developer';
const birthYear = '2004';
const year = 2025;

const tommy = "I'm " + firstName + ', a' + (year - birthYear) + " years old " + job + "!";
console.log(tommy);

// Template String
const templateTommy = `I'm ${firstName} a ${year - birthYear} years old ${job} !`;
console.log(templateTommy);

console.log(`What is your name:`);

// New Line
console.log("New Line \n\
Your ID: \n\
Your Phone Numeber: ");

// New Line with template string
console.log(`New Line with Template String
Your Age:
Your Gender:           
Your Email:`)
