// Arrow Functions
// Shorter and faster to write
const calAge3 = birthYear => 2025 - birthYear;

const birthYear = Number(prompt("What is your birthyear: "));
console.log(`Your age: ${calAge3(birthYear)}`);

// Grade Calculator
const gradeCalculator = grade => {
    if(grade >= 80){
        console.log("A");
    } else if(grade >= 70 && grade <= 79){
        console.log("B");
    } else if(grade >= 60 && grade <= 69){
        console.log("C");
    } else if(grade >= 50 && grade <= 59){
        console.log("D");
    }else{
        console.log("F");
    }
}

const grade = Number(prompt("What is your grade: "));
console.log(`Your Grade: ${gradeCalculator(grade)}`);

